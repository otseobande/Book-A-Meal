import { LOGIN_SUCCESS, LOGOUT } from './actionTypes.js';
import ls from '../utils/securels.js';

export const loginSuccess = (userDetails) => {
  ls.set('token', userDetails.token);

  return {
    type: LOGIN_SUCCESS,
    userDetails
  };
};

export const logout = (userDetails) => {
  ls.remove('token');
  return {
    type: LOGOUT,
    userDetails
  };
};
