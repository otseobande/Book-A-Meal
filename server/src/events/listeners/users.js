import * as userHandler from '../handlers/user';

/**
 * Sets event listners on express app
 *
 * @param  {object} app - Express application
 * @return {undefined}
 */
const userEventListener = (app) => {
  app.on('UserSignup', userHandler.sendWelcomeNotifications);
  app.on('passwordReset', userHandler.sendResetPasswordEmail);
};

export default userEventListener;
