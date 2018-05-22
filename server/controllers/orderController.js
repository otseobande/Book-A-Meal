import { order as orders, meal as meals } from '../models';

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

    return meals.findOne({
      where: {
        id: mealId
      }
    })
      .then((foundMeal) => {
        if (foundMeal) {
          return orders.create({
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
          return createdOrder.reload();
        }
      })
      .then((createdOrder) => {
        if (createdOrder) {
          req.app.emit('OrderCreated', createdOrder);

          res.status(201).json({
            status: 'success',
            message: 'Order created successfully',
            order: createdOrder
          });
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
    let findOrders = orders.findAll();
    switch (req.user.role) {
      case 'caterer':
        findOrders = orders.scope({ method: ['caterer', req.user.id] })
          .findAll();
        break;
      case 'customer':
        findOrders = orders.findAll({
          where: {
            userId: req.user.id
          }
        });
        break;
      default:
        break;
    }

    return findOrders
      .then(foundOrders => res.status(200).json({
        status: 'success',
        orders: foundOrders
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
    const {
      mealId,
      quantity,
      deliveryAddress,
      phoneNumber
    } = req.body;

    const { order } = req;
    return order.updateAttributes({
      mealId: mealId || order.mealId,
      quantity: quantity || order.quantity,
      deliveryAddress: deliveryAddress || order.deliveryAddress,
      phoneNumber: phoneNumber || order.phoneNumber
    })
      .then((updatedOrder) => {
        req.app.emit('OrderUpdated', updatedOrder);

        res.status(200).json({
          status: 'success',
          message: 'order updated successfully',
          order: updatedOrder
        });
      })
      .catch(err => next(err));
  }

  /**
   * Mark an order as delivered order
   *
   * @staticmethod
   *
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {Function} next - Middleware next
   * @return {json} res.json
   */
  static deliverOrder(req, res, next) {
    const { orderId } = req.params;

    return orders.scope({ method: ['caterer', req.user.id] })
      .findAll()
      .then(mealOrders => mealOrders.find(order => order.id === orderId))
      .then((order) => {
        if (order) {
          return order.updateAttributes({
            status: 'delivered'
          });
        }
      })
      .then((deliveredOrder) => {
        if (deliveredOrder) {
          req.app.emit('OrderDelivered', deliveredOrder);
          
          return res.status(200).json({
            status: 'success',
            message: 'Order delivered successfully',
            order: updatedOrder
          });
        }

        res.status(404).json({
          status: 'error',
          message: 'Order not found'
        });
      })
      .catch(err => next(err));
  }
}

export default OrderController;
