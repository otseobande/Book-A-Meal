import Joi from 'joi';
import validate from 'express-validation';

export const validateCreate = validate({
  body: {
    title: Joi.string().required(),
    date: Joi.string().regex(/\d{1,2}-\d{1,2}-\d{4}/).required(),
    categories: Joi.array().required()
  }
});

export const validateUpdate = validate({
  params: {
    date: Joi.string().regex(/\d{1,2}-\d{1,2}-\d{4}/)
  },
  body: {
    title: Joi.string().required(),
    categories: Joi.array()
  }
});

export const validateDate = validate({
  params: {
    date: Joi.string().regex(/\d{1,2}-\d{1,2}-\d{4}/)
  }
});
