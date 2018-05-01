import Joi from 'joi';
import validate from 'express-validation';

const mealId = Joi.number().integer().positive();
const quantity = Joi.number().integer().positive();
const deliveryAddress = Joi.string();

export const validateCreate = validate({
  body: {
    mealId: mealId.required(),
    quantity: quantity.required(),
    deliveryAddress: deliveryAddress.required()
  }
});

export const validateUpdate = validate({
  body: {
    mealId,
    quantity,
    deliveryAddress
  }
});
