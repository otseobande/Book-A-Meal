/* eslint no-unused-vars: 0 */
import config from '../config';
import logger from '../utils/logger';
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
  if (error instanceof SyntaxError && error.status === 400) {
    return res.status(400).json({
      status: 'error',
      message: 'The JSON in your request seems to be invalid.'
    });
  }

  if (error.statusText && error.statusText === 'Bad Request') {
    const message = error.errors.reduce((acc, err) => acc.concat(err.messages), []);

    return res.status(400).json({
      status: 'error',
      message
    });
  }

  if (error.name && error.name === 'SequelizeUniqueConstraintError') {
    const message = error.errors.map(err => `${err.path} "${err.value}" already exists`);

    return res.status(409).json({
      status: 'error',
      message
    });
  }

  logger.error(error.stack);

  const errMsg = env === 'production'
    ? 'something went wrong'
    : error.stack;

  return res.status(error.status || 500).json({
    status: 'error',
    message: errMsg
  });
};

export default handleErrors;
 