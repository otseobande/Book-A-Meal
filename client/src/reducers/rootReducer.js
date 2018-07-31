import { combineReducers } from 'redux';
import menusPeep from './menusPeep';
import menusForTheDay from './menusForTheDay';
import auth from './auth.js';
import resetPassword from './resetPassword.js';
import orderHistory from './orderHistory.js';

export default combineReducers({
  menusPeep,
  menusForTheDay,
  auth,
  resetPassword,
  orderHistory
});
