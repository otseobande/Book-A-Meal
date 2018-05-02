const handleErrors = (error, req, res) => {
  if (Object.keys(error).length > 0) {
    return res.status(400).json({
      error
    });
  }

  const errMsg = process.env.NODE_ENV === 'production'
    ? error.message
    : 'something went wrong';

  return res.status(500).json({
    error: errMsg
  });
};

export default handleErrors;
