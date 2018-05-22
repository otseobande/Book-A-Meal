import orderHandler from './handlers/orders';

const setEventListeners = (app) => {
  app.on('OrderCreated', orderHandler.sendOrderCreatedNotifications);
  app.on('OrderUpdated', orderHandler.sendOrderUpdatedNotifications);
  app.on('OrderDelivered', orderHandler.sendOrderDeliveredNotifications);
};

export default setEventListeners;
