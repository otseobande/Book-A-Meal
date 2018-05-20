import moment from 'moment';
import Joi from 'joi';
import JoiPhoneNumber from 'joi-phone-number';
import validate from 'express-validation';
import { order } from '../../models';
import config from '../../config';

const extendedJoi = Joi.extend(JoiPhoneNumber);

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
const phoneNumber = extendedJoi.string()
  .min(13)
  .phoneNumber({ defaultCountry: 'NG', format: 'international' });
const orderId = Joi.string().guid({
  version: [
    'uuidv4',
    'uuidv5'
  ]
});

const token = Joi.string().token();


export const validateReqBodyOnCreate = validate({
  body: {
    mealId: mealId.required(),
    quantity: quantity.required(),
    deliveryAddress: deliveryAddress.required(),
    phoneNumber: phoneNumber.required(),
    status,
    token
  }
});


/**
 * Check if the order is expired
 *
 * @param  {object}   req  - Request Object
 * @param  {object}   res  - Response Object
 * @param  {Function} next - Middleware next
 * @return {res| next} response or calls next function
 */
const validateExpiry = (req, res, next) =>
  order.find({
    where: {
      id: req.params.orderId,
      userId: req.user.id
    }
  })
    .then((foundOrder) => {
      if (foundOrder) {
        if (moment(foundOrder.createdAt).add(config.orderExpiry, 'hours') < moment()) {
          return res.status(422).json({
            status: 'error',
            message: 'order modification has expired'
          });
        }
        req.order = foundOrder;
        next();
      } else {
        return res.status(404).json({
          status: 'error',
          message: 'order not found'
        });
      }
    })
    .catch(err => next(err));

const validateUpdateReqBody = validate({
  params: {
    orderId
  },
  body: {
    mealId,
    quantity,
    status,
    deliveryAddress,
    token
  }
});

export const validateUpdate = [
  validateUpdateReqBody,
  validateExpiry
];

export const validateCreate = [
  validateReqBodyOnCreate
];
