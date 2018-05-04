/* eslint consistent-return: 0 */
import jwt from 'jsonwebtoken';
import users from '../dummy-models/users';
import config from '../config';

const secret = config.jwtSecret;

/**
 * Processes the req object for the authorization
 * token
 *
 * @param  {object} req - Request object
 * @return {string} token - Token gotten from req
 */
const getToken = (req) => {
  if (req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer') {
    const [, token] = req.headers.authorization.split(' ');
    return token;
  }

  if (req.query && req.query.token) {
    const { token } = req.query;
    return token;
  }
};

/**
 * Adds a the authorized user's model to the
 * body of the request
 *
 * @param  {object} req - Request object
 * @param  {object} decoded - Decoded Token payload
 * @return {boolean}
 */
const addUserToReqObj = (req, decoded) => {
  req.user = decoded;
  if (req.user) return true;
  return false;
};

/**
 * @exports
 * @middleware
 * @param  {object} req - Request Object
 * @param {object} res - Response Object
 * @return {function|json} next() or res.json()
 */
const authorize = (req, res, next) => {
  const token = getToken(req);
  const decoded = jwt.verify(token, secret);
  addUserToReqObj(req, decoded);
  next();
};

export default authorize;
