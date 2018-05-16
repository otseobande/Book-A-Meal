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

    return User.find({
      where: {
        username
      }
    })
      .then((user) => {
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
      })
      .then(() => res.status(422).json({
        status: false,
        message: 'Please check your credentials'
      }))
      .catch(err => next(err));
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

    return User.create({
      fullName,
      username,
      email,
      password,
      role
    })
      .then((user) => {
        const token = jwt.sign({
          id: user.id,
          role: user.role
        }, jwtSecret, {
          expiresIn: `${jwtExpiry}h`
        });

        return res.status(201).json({
          status: true,
          message: 'User signup successful',
          user: {
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            role: user.role
          },
          token
        });
      })
      .catch(err => next(err));
  }
}

export default AuthController;
