import orderHandler from './handlers/orders';
import menuHandler from './handlers/menu';

/**
 * Sets event listners on express app
 *
 * @param  {object} app - Express application
 * @return {undefined}
 */
const setEventListeners = (app) => {
  // Order events
  app.on('OrderCreated', orderHandler.sendOrderCreatedNotifications);
  app.on('OrderUpdated', orderHandler.sendOrderUpdatedNotifications);
  app.on('OrderDelivered', orderHandler.sendOrderDeliveredNotifications);

  // Menu events
  app.on('MenuCreatedForToday', menuHandler.sendNotificationsForTodaysMenu);
};

export default setEventListeners;
