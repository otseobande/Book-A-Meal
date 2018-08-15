import mirrorArray from '../utils/mirrorArray.js';

const actionTypes = mirrorArray([
  // menus peep
  'REQUEST_PEEP_MENUS',
  'RECIEVE_PEEP_MENUS',

  // menus for the day
  'REQUEST_MENUS_FOR_THE_DAY',
  'RECIEVE_MENUS_FOR_THE_DAY',

  // auth
  'LOGIN_SUCCESS',
  'SIGNUP_SUCCESS',
  'PASSWORD_RESET_SUCCESS',
  'RESET_MAIL_REQUEST_SUCCESS',
  'LOGOUT',

  // orders
  'ORDER_PLACED',
  'FETCH_ORDER_HISTORY_SUCCESSFUL',
  'CANCEL_ORDER_SUCCESSFUL',

  // meals
  'REQUEST_MEALS',
  'RECIEVE_MEALS'
]);

export default actionTypes;
