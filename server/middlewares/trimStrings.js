/**
 * Trims all incoming strings
 *
 * @middlware
 * @param  {object} req - Request object
 * @param  {object} res - Response object
 * @param  {Function} next - middleware next function
 * @return {function} next - passes control to the application
 */
const trimStrings = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = req.body[key]
        .replace(/  +/g, ' ')
        .trim();
    }
  });

  return next();
};

export default trimStrings;
