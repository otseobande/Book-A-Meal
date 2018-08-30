import mirrorArray from '../utils/mirrorArray.js';

const actionTypes = mirrorArray([
  // menus peep
  'REQUEST_PEEP_MENUS',
  'RECEIVE_PEEP_MENUS',

  // menus for the day
  'REQUEST_MENUS_FOR_THE_DAY',
  'RECEIVE_MENUS_FOR_THE_DAY',

  // Caterer Menus
  'REQUEST_MENUS',
  'RECEIVE_MENUS',

  // auth
  'LOGIN_SUCCESS',
  'SIGNUP_SUCCESS',
  'PASSWORD_RESET_SUCCESS',
  'RESET_MAIL_REQUEST_SUCCESS',
  'LOGOUT',

  // orders
  'ORDER_PLACED',
  'RECEIVE_ORDERS',

  // meals
  'REQUEST_MEALS',
  'RECEIVE_MEALS'
]);

export default actionTypes;
