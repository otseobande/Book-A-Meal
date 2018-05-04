const guard = (role) =>(req, res, next) => {
	if(req.user.role === role){
		next();
	}

  return res.status(403).json({
    status: false,
    message: 'Forbidden'
  });
}

export default guard;