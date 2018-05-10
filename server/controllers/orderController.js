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
      deliveryAddress
    } = req.body;

    return order.create({
      userId: req.user.id,
      mealId,
      quantity,
      deliveryAddress,
      status: 'pending'
    })
      .then(createdOrder => res.status(200).json({
        status: true,
        message: 'Order created successfully',
        order: createdOrder
      }))
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
    meal.findAll({
      where: {
        userId: req.user.id
      }
    })
      .then((meals) => {
        if (req.user.role === 'caterer') {
          const orders = [];
          meals.forEach((currentMeal) => {
            orders.push(currentMeal.getOrders()
              .then((foundOrders) => {
                if (foundOrders.length > 0) {
                  return order;
                }
              }));
          });

          return Promise.all(orders);
        }
      })
      .then((foundOrders) => {
        if (foundOrders) {
          const cleanOrders = foundOrders.filter(i => i);
          return res.status(200).json({
            status: true,
            orders: deepFlatten(cleanOrders)
          });
        }
      })
      .then(() => order.findAll({
        where: {
          userId: req.user.id
        }
      }))
      .then(orders => res.status(200).json({
        status: true,
        data: orders
      }))
      .catch(err => next(err));
  }

  /**
   * Updates an existing order
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {Function} next - Middleware next
   * @return {json} res.json
   */
  static updateOrder(req, res, next) {
    try {
      req.order.updateAttributes(req.body);
      return res.status(200).json({
        status: true,
        message: 'order updated successfully',
        order: req.order
      });
    } catch (err) {
      next(err);
    }
  }
}

export default OrderController;
