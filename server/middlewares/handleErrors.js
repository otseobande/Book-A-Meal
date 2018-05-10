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
  if (error.statusText && error.statusText === 'Bad Request') {
    let fields = [];
    let messages = [];

    error.errors.forEach((err) => {
      messages = [...messages, ...err.messages];
      fields = [...fields, ...err.field];
    });

    return res.status(400).json({
      status: false,
      statusText: error.statusText,
      errors: {
        fields,
        messages
      }
    });
  }

  if (error.name && error.name === 'SequelizeUniqueConstraintError') {
    const message = [];

    error.errors.forEach((err) => {
      message.push(`${err.path} "${err.value}" already exists`);
    });

    return res.status(409).json({
      status: false,
      message
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
