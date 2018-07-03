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
  'LOGOUT'
]);

export default actionTypes;
