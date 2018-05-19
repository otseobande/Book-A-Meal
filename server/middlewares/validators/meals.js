import Joi from 'joi';
import validate from 'express-validation';

const title = Joi.string()
  .min(2)
  .max(25);
const description = Joi.string()
  .min(4)
  .max(50);
const price = Joi.number()
  .min(1)
  .positive();
const img = Joi.string()
  .min(1);
const token = Joi.string().token();
const mealId = Joi.string().guid({
  version: [
    'uuidv4',
    'uuidv5'
  ]
});

/**
 * Validation middleware
 * @exports
 */
export const validateCreate = validate({
  body: {
    title: title.required(),
    description: description.required(),
    price: price.required(),
    img,
    token
  }
});

/**
 * Validation middleware
 * @exports
 */
export const validateMealId = validate({
  params: {
    mealId
  },
  body: {
    token
  }
});

/**
 * Validation middleware
 * @exports
 */
export const validateUpdate = validate({
  params: {
    mealId
  },

  body: {
    title: Joi.string().required(),
    description,
    price,
    img,
    token
  }
});
