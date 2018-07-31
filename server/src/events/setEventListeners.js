import orderEventListeners from './listeners/orders';
import menuEventListeners from './listeners/menu';
import userEventListeners from './listeners/users';

/**
 * Sets event listners on express app
 *
 * @param  {object} app - Express application
 * @return {undefined}
 */
const setEventListeners = (app) => {
  const listeners = [
    orderEventListeners,
    menuEventListeners,
    userEventListeners
  ];

  listeners.forEach(listener => listener(app));
};

export default setEventListeners;
