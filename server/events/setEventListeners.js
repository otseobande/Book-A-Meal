import handler from './handlers';

const setEventListeners = (app) => {
  app.on('OrderCreated', handler.SendOrderCreatedNotifications);
};

export default setEventListeners;
