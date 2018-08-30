import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/actionTypes.js';
import securels from '../utils/securels';
import menusPeep from './menusPeep.js';
import menusForTheDay from './menusForTheDay.js';
import auth from './auth.js';
import resetPassword from './resetPassword.js';
import orderHistory from './orderHistory.js';
import catererMeals from './catererMeals.js';
import catererMenus from './catererMenus.js';

const appReducers = combineReducers({
  menusPeep,
  menusForTheDay,
  auth,
  resetPassword,
  orderHistory,
  catererMeals,
  catererMenus
});

const rootReducer = (state, action) => {
  let updatedState = { ...state };

  if (action.type === LOGOUT) {
    securels.removeAll();
    updatedState = undefined;
  }

  return appReducers(updatedState, action);
};

export default rootReducer;
