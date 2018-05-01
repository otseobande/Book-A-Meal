import Joi from 'joi';
import validate from 'express-validation';

export const validateCreate = validate({
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    img: Joi.string()
  }
});

export const validateMealId = validate({
  params: {
    mealId: Joi.number()
  }
});

export const validateUpdate = validate({
  params: {
    mealId: Joi.number()
  },

  body: {
    title: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number(),
    img: Joi.any()
  }
});
