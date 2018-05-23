import orderHandler from './handlers/orders';
import menuHandler from './handlers/menu';
import userHandler from './handlers/user';

/**
 * Sets event listners on express app
 *
 * @param  {object} app - Express application
 * @return {undefined}
 */
const setListeners = (app) => {
  // Order events
  app.on('OrderCreated', orderHandler.sendOrderCreatedNotifications);
  app.on('OrderUpdated', orderHandler.sendOrderUpdatedNotifications);
  app.on('OrderDelivered', orderHandler.sendOrderDeliveredNotifications);

  // Menu events
  app.on('MenuCreatedForToday', menuHandler.sendNotificationsForTodaysMenu);

  // User events
  app.on('UserSignup', userHandler.sendWelcomeNotifications);
};

export default setListeners;
