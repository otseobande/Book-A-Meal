import { order } from '../models';
import config from '../config';
import moment from 'moment';

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
   * @return {json} res.json
   */
  static createOrder(req, res, next) {
    order.create({
      userId: req.user.id,
      ...req.body
    }).then(() => {
      return res.status(200).json({
        status: true,
        message: 'Order created successfully'
      });
    }).catch(err => next(err))
  }

  /**
   * Gets all orders
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getAllOrders(req, res, next) {
    const responseData = [];
    order.findAll({
      where: {
        userId: req.user.id
      }
    }).then(orders => {
      return res.status(200).json({
        status: true,
        data: orders
      });
    }).catch(err => next(err));
  }

  /**
   * Updates an existing order
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static updateOrder(req, res, next) {
    const { orderId } = req.params;

    order.find({
      where: {
        id: orderId,
        userId: req.user.id
      }
    })
    .then(foundOrder => {
      if(foundOrder){
         if(foundOrder.createdAt
              .add(config.orderExpiry, 'hours') 
          > moment()){
          return res.status(400).json({
            status: false,
            message: 'order modification has expired'
          })
         }

        foundOrder.updateAttributes(req.body);

        return res.status(202).json({
          status: true,
          message: 'order updated successfully'
        });
      }

      return res.status(404).json({
        status: false,
        message: 'order not found'
      });
    })
    .catch(err => next(err));
  }
}

export default OrderController;
