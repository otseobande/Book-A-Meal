import jwt from 'jsonwebtoken';
import config from '../config';
import { user as User } from '../models';

const { jwtExpiry, jwtSecret } = config;

/**
 * @exports
 * @class AuthController
 */
class AuthController {
  /**
   * Authenticates users
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static login(req, res, next) {
    const { username, password } = req.body;

    User.find({
      where: {
        username
      }
    }).then((user) => {
      if (user && user.validPassword(password)) {
        const token = jwt.sign({
          id: user.id,
          role: user.role
        }, jwtSecret, {
          expiresIn: `${jwtExpiry}h`
        });

        return res.status(200).json({
          status: true,
          token
        });
      }
    }).then(() => res.status(400).json({
      status: false,
      message: 'Please check your credentials'
    })).catch((err) => {
      next(err);
    });
  }

  /**
   * Creates new users
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static signup(req, res, next) {
    const {
      fullName,
      username,
      email,
      password,
      role
    } = req.body;


    User.create({
      fullName,
      username,
      email,
      password,
      role
    }).then(() => res.status(201).json({
      status: true,
      message: 'User signup successful'
    })).catch((err) => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        const message = [];

        err.errors.forEach((error) => {
          message.push(`${error.path} "${error.value}" is taken`);
        });

        return res.status(409).json({
          status: false,
          message
        });
      }

      next(err);
    });
  }
}

export default AuthController;
