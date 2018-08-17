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
  .min(6);
const role = Joi.string()
  .min(1)
  .valid(['caterer', 'customer', 'admin']);


export const validateSignup = validate({
  body: {
    fullName: fullName.required(),
    email: email.required(),
    username: username.required(),
    password: password.required(),
    role: role.required()
  }
});

export const validateLogin = validate({
  body: {
    username: username.required(),
    password: Joi.string().required()
  }
});

export const validateEmail = validate({
  body: {
    email: email.required()
  }
});

export const validateReset = validate({
  body: {
    password: password.required(),
    resetToken: Joi.string().required()
  }
});

