
/**
 * Guard middleware
 * @middleware
 * @param  {string} role Intended role to guard for
 * @return {function}  Middleware function
 */
const guard = role => (req, res, next) => {
  if (typeof (role) !== 'string') {
    throw TypeError('Please pass a string as a role');
  }

  if (req.user.role === role) {
    return next();
  }

  return res.status(403).json({
    status: false,
    message: 'Forbidden'
  });
};

export default guard;
