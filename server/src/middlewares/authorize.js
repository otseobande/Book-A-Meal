/* eslint consistent-return: 0 */
import jwt from 'jsonwebtoken';
import stripToken from '../utils/stripToken';
import config from '../config';

const secret = config.jwtSecret;

/**
 * @exports
 * @middleware
 * @param  {object} req - Request Object
 * @param {object} res - Response Object
 * @param {function} next - middleware next
 * @return {function|json} next
 */
const authorize = (req, res, next) => {
  try {
    const token = stripToken(req);
    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    return next();
  } catch (err) {
    return res.status(401).json({
      status: 'error',
      message: 'Token is invalid or not provided'
    });
  }
};

export default authorize;
