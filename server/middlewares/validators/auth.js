import Joi from 'joi';
import validate from 'express-validation';

const fullName = Joi.string()
  .min(1);
const email = Joi.string()
  .min(1)
  .email();
const username = Joi.string()
  .min(1);
const password = Joi.string()
  .min(1);
const role = Joi.string()
  .min(1)
  .valid(['caterer', 'customer', 'admin']);


const validateSignup = validate({
  body: {
    fullName: fullName.required(),
    email: email.required(),
    username: username.required(),
    password: password.required(),
    role: role.required()
  }
});

const validateLogin = validate({
  body: {
    username: username.required(),
    password: password.required()
  }
});


export {
  validateSignup,
  validateLogin
};
