import Joi from 'joi';
import validate from 'express-validation';

const title = Joi.string()
  .min(2)
  .max(25);
const categories = Joi.array();
const date = Joi.string()
  .regex(/\d{1,2}-\d{1,2}-\d{4}/);

/**
 * Validation middleware
 * @exports
 */
export const validateCreate = validate({
  body: {
    title: title.required(),
    date: date.required(),
    categories: categories.required()
  }
});

/**
 * Validation middleware
 * @exports
 */
export const validateUpdate = validate({
  params: {
    date
  },
  body: {
    title: title.required(),
    categories
  }
});

/**
 * Validation middleware
 * @exports
 */
export const validateDate = validate({
  params: {
    date
  }
});
