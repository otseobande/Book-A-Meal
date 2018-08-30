import dedent from 'dedent';
import jwt from 'jsonwebtoken';
import { jwtSecret, appUrl } from '../../../config';
import { user as User } from '../../../models';
import Notifier from '../../../utils/notifier';
import logger from '../../../utils/logger';

/**
 * Sends welcome notifications on user signup
 * @param  {string} email Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendResetPasswordEmail = async (email) => {
  try {
    const user = await User.find({ where: { email } });

    if (user) {
      const resetToken = jwt.sign({
        id: user.id
      }, jwtSecret, {
        expiresIn: '3h'
      });

      const resetLink = `${appUrl}/reset_password/${resetToken}`;
      const userNotifier = new Notifier({
        userId: user.id,
        subject: 'Password reset',
        info: dedent`
        Click the link below to reset your password:

        ${resetLink}

        Link expires in 3 hours.`
      });

      await user.update({ resetToken });
      await userNotifier.sendMail();
    }

    return true;
  } catch (err) {
    logger.error(err.stack);
  }
};

export default sendResetPasswordEmail;
