import * as orderHandler from '../handlers/orders';

/**
 * Sets event listners on express app
 *
 * @param  {object} app - Express application
 * @return {undefined}
 */
const orderEventListeners = (app) => {
  // Order events
  app.on('OrderCreated', orderHandler.sendOrderCreatedNotifications);
  app.on('OrderUpdated', orderHandler.sendOrderUpdatedNotifications);
  app.on('OrderDelivered', orderHandler.sendOrderDeliveredNotifications);
};

export default orderEventListeners;
