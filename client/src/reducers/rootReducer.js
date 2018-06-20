import { combineReducers } from 'redux';
import mealsForTheDay from './mealsForTheDay';
import auth from './auth.js';

export default combineReducers({
  mealsForTheDay,
  auth
});
