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

  if (req.user.role === role || req.user.role === 'admin') {
    return next();
  }

  return res.status(403).json({
    status: 'error',
    message: "You don't have the right privileges to access this route."
  });
};

export default guard;
