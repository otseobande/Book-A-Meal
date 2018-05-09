import Joi from 'joi';
import validate from 'express-validation';

const fullName = Joi.string();
const email = Joi.string().email();
const username = Joi.string();
const password = Joi.string();
const role = Joi.string();


const validateSignUpReqBody = validate({
  body: {
    fullName: fullName.required(),
    email: email.required(),
    username: username.required(),
    password: password.required(),
    role: role.required()
  }
});

const validateRole = (req, res, next) => {
  const roles = ['caterer', 'customer', 'admin'];

  if (!roles.includes(req.body.role)) {
    return res.status(400).json({
      status: false,
      message: 'role does not exist'
    });
  }

  next();
};

const validateLogin = validate({
  body: {
    username: username.required(),
    password: password.required()
  }
});

const validateSignup = [
  validateSignUpReqBody,
  validateRole
];

export {
  validateSignup,
  validateLogin
};
