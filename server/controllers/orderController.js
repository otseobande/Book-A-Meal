import { order, meal } from '../models';
import deepFlatten from '../helpers/deepFlatten';


/**
 * @exports
 * @class OrderController
 */
class OrderController {
  /**
   * Creates a new order
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - Middleware next
   * @return {json} res.json
   */
  static createOrder(req, res, next) {
    const {
      mealId,
      quantity,
      deliveryAddress,
      phoneNumber
    } = req.body;

    return meal.findOne({
      where: {
        id: mealId
      }
    })
      .then((foundMeal) => {
        if (foundMeal) {
          return order.create({
            userId: req.user.id,
            mealId,
            quantity,
            deliveryAddress,
            phoneNumber,
            status: 'pending'
          });
        }
        res.status(404).json({
          status: 'error',
          message: 'Meal does not exist'
        });
      })
      .then((createdOrder) => {
        if (createdOrder) {
          res.status(201).json({
            status: 'success',
            message: 'Order created successfully',
            order: createdOrder
          });
          req.app.emit('OrderCreated');
        }
      })
      .catch(err => next(err));
  }

  /**
   * Gets all orders
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - Middlware next
   * @return {json} res.json
   */
  static getAllOrders(req, res, next) {
    if (req.user.role === 'caterer') {
      return meal.findAll({
        where: {
          userId: req.user.id
        }
      })
        .then((meals) => {
          const orders = meals.map(currentMeal => currentMeal.getOrders()
            .then((foundOrders) => {
              if (foundOrders.length > 0) {
                return foundOrders;
              }
            }));

          return Promise.all(orders);
        })
        .then((foundOrders) => {
          const filteredOrders = foundOrders.filter(foundOrder => foundOrder);
          res.status(200).json({
            status: 'success',
            orders: deepFlatten(filteredOrders)
          });
        })
        .catch(err => next(err));
    }
    return order.findAll({
      where: {
        userId: req.user.id
      }
    })
      .then(orders => res.status(200).json({
        status: 'success',
        orders
      }))
      .catch(err => next(err));
  }

  /**
   * Updates an existing order
   *
   * @staticmethod
   *
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {Function} next - Middleware next
   * @return {json} res.json
   */
  static updateOrder(req, res, next) {
    return req.order.updateAttributes(req.body)
      .then((updatedOrder) => {
        res.status(200).json({
          status: 'success',
          message: 'order updated successfully',
          order: updatedOrder
        });
      })
      .catch(err => next(err));
  }
}

export default OrderController;
