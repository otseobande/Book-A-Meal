import * as menuHandler from '../handlers/menu';

/**
 * Sets event listners on express app
 *
 * @param  {object} app - Express application
 * @return {undefined}
 */
const menuEventListeners = (app) => {
  app.on('MenuCreatedForToday', menuHandler.sendNotificationsForTodaysMenu);
};

export default menuEventListeners;
