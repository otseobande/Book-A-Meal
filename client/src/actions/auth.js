import axios from 'axios';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import Auth from '../services/api/auth.js';
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes.js';
import ls from '../utils/securels.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user
});

export const login = (userDetails, from) => (dispatch) => {
  Auth.login(userDetails).then((res) => {
    const { user, token } = res.data;
    dispatch(loginSuccess(user));
    dispatch(from ? push(from) : '/menus');
    toast.success('Login successful!', { autoClose: 3000 });

    ls.set('book-a-meal', { user, token });
  }).catch(requestErrorHandler);
};

export const signup = userDetails => (dispatch) => {
  axios.post(`${process.env.APP_URL}/api/v1/auth/signup`, userDetails, {
    headers: {
      accept: 'application/json',
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then((res) => {
    const { user, token } = res.data;
    dispatch(loginSuccess(user));
    toast.success('Signup successful!', { autoClose: 3000 });

    ls.set('book-a-meal', { user, token });
  }).catch(requestErrorHandler);
};

export const logout = () => {
  toast('Logged out.', { autoClose: 1500 });
  ls.remove('book-a-meal');

  return {
    type: LOGOUT
  };
};
