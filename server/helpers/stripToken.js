/**
 * Strips authorization token from the req object
 *
 * @exports
 * @param  {object} req - Request object
 * @return {string} token - Token gotten from req
 */
const stripToken = (req) => {
  if (req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer') {
    const [, token] = req.headers.authorization.split(' ');

    return token;
  }


  if (req.query && req.query.token) {
    return req.query.token;
  }
};

export default stripToken;
