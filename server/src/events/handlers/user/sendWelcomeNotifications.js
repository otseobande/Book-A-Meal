import dedent from 'dedent';
import Notifier from '../../../utils/notifier';
import logger from '../../../utils/logger';

/**
 * Sends welcome notifications on user signup
 * @param  {object} user Sequelize model instance
 * @return {Promise}  Promise resolving with a boolean
 */
const sendWelcomeNotifications = async (user) => {
  try {
    const newUserNotifier = new Notifier({
      userId: user.id,
      subject: 'Welcome to Book-A-Meal',
      info: dedent`

      Welcome to Book-A-Meal, we are excited to have you join us. We look forward to giving a wonderful experience.

      Thanks,
      The Book-A-Meal team.`
    });

    await newUserNotifier.notify();

    return true;
  } catch (err) {
    logger.error(err.stack);
  }
};

export default sendWelcomeNotifications;
