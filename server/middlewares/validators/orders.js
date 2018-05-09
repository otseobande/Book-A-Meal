import Joi from 'joi';
import validate from 'express-validation';

const mealId = Joi.number().integer().positive();
const quantity = Joi.number().integer().positive();
const deliveryAddress = Joi.string();
const status = Joi.string();

/**
 * Validation middleware
 * @exports
 */
export const validateCreate = validate({
  body: {
    mealId: mealId.required(),
    quantity: quantity.required(),
    deliveryAddress: deliveryAddress.required(),
    status: status.required()
  }
});

/**
 * Validation middleware
 * @exports
 */
export const validateUpdate = validate({
  body: {
    mealId,
    quantity,
    status,
    deliveryAddress
  }
});
