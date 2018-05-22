/**
 * Strips authorization token from the req object
 *
 * @exports
 * @param  {object} req - Request object
 * @return {string} token - Token gotten from req
 */
const stripToken = (req) => {
  if (req.headers.authorization) {
    return req.headers.authorization.replace('Bearer ', '');
  }

  if (req.headers.token) {
    return req.headers.token;
  }

  if (req.query && req.query.token) {
    return req.query.token;
  }

  if (req.body && req.body.token) {
    return req.body.token;
  }

  return '';
};

export default stripToken;
