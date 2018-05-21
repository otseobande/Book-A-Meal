import handler from './handlers';

const setEventListeners = (app) => {
  app.on('OrderCreated', handler.OrderCreated);
};

export default setEventListeners;
