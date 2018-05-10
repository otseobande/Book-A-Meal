import moment from 'moment';
import Joi from 'joi';
import validate from 'express-validation';
import { order } from '../../models';
import config from '../../config';

const mealId = Joi.number()
  .min(1)
  .integer()
  .positive();
const quantity = Joi.number()
  .min(1)
  .integer()
  .positive();
const deliveryAddress = Joi.string()
  .min(1);
const status = Joi.string()
  .min(1);


// const checkIfMealIsAvailable = (req, res, next) => menu.findAll({
//   where: {
//     date: moment().format('YYYY-MM-DD')
//   }
// })
//   .then((foundMenus) => {
//     if (foundMenus.length > 0) {
//       return foundMenus.map(menu => menu.getMenuCategories());
//     }
//   })
//   .then((menuCategories) => {
//     if (menuCategories) {
//       return menuCategories.map(menuCategory => menuCategory.getMeals());
//     }
//   })
//   .then(meals => Promise.all(meals))
//   .then((resolvedMeals) => {
//     if (resolvedMeals) {
//       const flatMeals = deepFlatten(resolvedMeals);
//       flatMeals.forEach((meal) => {
//         if (meal.id === mealId) {
//           next();
//         }
//       });
//     }

//     return res.status(422).json({
//       status: false,
//       message: 'This meal does not appear in today\'s menus'
//     });
//   })
//   .catch(err => next(err));

export const validateReqBodyOnCreate = validate({
  body: {
    mealId: mealId.required(),
    quantity: quantity.required(),
    deliveryAddress: deliveryAddress.required(),
    status
  }
});


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
        if (moment(foundOrder.createdAt)
          .add(config.orderExpiry, 'hours')
            < moment()) {
          return res.status(400).json({
            status: false,
            message: 'order modification has expired'
          });
        }
        req.order = foundOrder;
        next();
      }
      return res.status(404).json({
        status: false,
        message: 'order not found'
      });
    })
    .catch(err => next(err));
};

const validateUpdateReqBody = validate({
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
