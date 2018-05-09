/* eslint no-unused-vars: 0 */
import config from '../config';
/**
 * Handles both validation and application errors
 * and sends a stack trace as a response in non-
 * production environments.
 *
 * @middleware
 * @param  {object} error - Error object
 * @param  {object} req - Request object
 * @param  {object} res - Response object
 * @param  {Function} next - Middleware next function
 * @param {string} env - runtime environment
 * @return {json} res.json
 */
const handleErrors = (error, req, res, next, env = config.env) => {
  if (error.statusText && error.statusText === "Bad Request") {
    return res.status(400).json({
      error
    });
  }


  const errMsg = env === 'production'
    ? 'something went wrong'
    : error.stack;

  return res.status(error.status || 500).json({
    error: errMsg
  });
};

export default handleErrors;