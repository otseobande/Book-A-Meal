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
  'ADD_MENU',
  'REMOVE_MENU',
  'EDIT_MENU',

  // auth
  'LOGIN_SUCCESS',
  'SIGNUP_SUCCESS',
  'PASSWORD_RESET_SUCCESS',
  'RESET_MAIL_REQUEST_SUCCESS',
  'LOGOUT',

  // orders
  'ORDER_PLACED',
  'RECEIVE_ORDERS',
  'EDIT_ORDER',

  // meals
  'REQUEST_MEALS',
  'RECEIVE_MEALS',
  'ADD_MEAL',
  'REMOVE_MEAL',
  'EDIT_MEAL'
]);

export default actionTypes;
