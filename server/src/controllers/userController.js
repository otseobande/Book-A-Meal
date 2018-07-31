import jwtDecode from 'jwt-decode';
import isFuture from 'date-fns/is_future';
import { user as User } from '../models';

/**
 * @exports
 * @class UserController
 */
class UserController {
  /**
   * send reset password link
   *
   * @staticmethod
   * @param {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static sendResetPasswordLink(req, res) {
    const { email } = req.body;

    req.app.emit('passwordReset', email);

    return res.status(202).json({
      status: 'success',
      message: 'Reset password link would be sent to your email shortly.'
    });
  }

  /**
   * reset password
   *
   * @staticmethod
   * @param {object} req Request object
   * @param {object} res Response object
   * @param {Function} next Express middleware next
   * @return {json} res.json
   */
  static resetPassword(req, res, next) {
    const { password, resetToken } = req.body;

    const decodedToken = jwtDecode(resetToken);
    const tokenIsValid = isFuture(decodedToken.exp * 1000);

    User.find({
      where: {
        id: decodedToken.id
      }
    }).then((user) => {
      if (user.resetToken === resetToken && tokenIsValid) {
        return user.update({ password });
      }

      res.status(400).json({
        status: 'error',
        message: 'Reset password link may have expired or is invalid'
      });
    }).then((user) => {
      if (user) {
        res.status(200).json({
          status: 'success',
          message: 'password reset successful'
        });
      }
    }).catch(next);
  }
}

export default UserController;
