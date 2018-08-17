import { combineReducers } from 'redux';
import menusPeep from './menusPeep.js';
import menusForTheDay from './menusForTheDay.js';
import auth from './auth.js';
import resetPassword from './resetPassword.js';
import orderHistory from './orderHistory.js';
import catererMeals from './catererMeals.js';
import catererMenus from './catererMenus.js';

export default combineReducers({
  menusPeep,
  menusForTheDay,
  auth,
  resetPassword,
  orderHistory,
  catererMeals,
  catererMenus
});
