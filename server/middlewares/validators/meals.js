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
const mealId = Joi.number()
  .integer()
  .min(1)
  .positive();

/**
 * Validation middleware
 * @exports
 */
export const validateCreate = validate({
  body: {
    title: title.required(),
    description: description.required(),
    price: price.required(),
    img
  }
});

/**
 * Validation middleware
 * @exports
 */
export const validateMealId = validate({
  params: {
    mealId
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
    img
  }
});
