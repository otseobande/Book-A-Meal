import { combineReducers } from 'redux';
import menusPeep from './menusPeep';
import menusForTheDay from './menusForTheDay';
import auth from './auth.js';

export default combineReducers({
  menusPeep,
  menusForTheDay,
  auth
});
