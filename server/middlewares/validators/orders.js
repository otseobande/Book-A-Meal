import moment from 'moment';
import Joi from 'joi';
import validate from 'express-validation';
import { order } from '../../models';
import config from '../../config';

const mealId = Joi.string().guid({
    version: [
        'uuidv4',
        'uuidv5'
    ]
});
const quantity = Joi.number()
  .min(1)
  .integer()
  .positive();
const deliveryAddress = Joi.string()
  .min(1);
const status = Joi.string()
  .min(1);

const orderId = Joi.string().guid({
  version: [
      'uuidv4',
      'uuidv5'
  ]
});


export const validateReqBodyOnCreate = validate({
  body: {
    mealId: mealId.required(),
    quantity: quantity.required(),
    deliveryAddress: deliveryAddress.required(),
    status
  }
});


/**
 * Check if the order is expired
 * 
 * @param  {object}   req  - Request Object
 * @param  {object}   res  - Response Object
 * @param  {Function} next - Middleware next
 * @return {res| next}        
 */
const validateExpiry = (req, res, next) => {
  const { orderId } = req.params;

  return order.find({
    where: {
      id: orderId,
      userId: req.user.id
    }
  })
    .then((foundOrder) => {
      if (foundOrder) {
        if (moment(foundOrder.createdAt).add(config.orderExpiry, 'hours') < moment()) {
          return res.status(400).json({
            status: 'error',
            message: 'order modification has expired'
          });
        } else {
          req.order = foundOrder;
          next();
        }
      } else {
        return res.status(404).json({
          status: 'error',
          message: 'order not found'
        });
      }
    })
    .catch(err => next(err));
};

const validateUpdateReqBody = validate({
  params: {
    orderId
  },
  body: {
    mealId,
    quantity,
    status,
    deliveryAddress
  }
});

export const validateUpdate = [
  validateUpdateReqBody,
  validateExpiry
];

export const validateCreate = [
  validateReqBodyOnCreate
  // checkIfMealIsAvailable
];
