import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import Auth from '../services/api/auth.js';
import { LOGIN_SUCCESS, LOGOUT } from './actionTypes.js';
import ls from '../utils/securels.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: {
    user
  }
});

export const login = (userDetails, from) => dispatch => Auth.login(userDetails)
  .then((res) => {
    const { user, token } = res.data;

    const mainPage = user.role === 'caterer' ? '/manage-orders' : '/menus';

    ls.set('book-a-meal', { user, token });

    const redirectLink = from || mainPage;

    dispatch(loginSuccess(user));
    dispatch(push(redirectLink));

    toast.success(`Welcome back ${user.username}!`, { autoClose: 4000 });
  })
  .catch(requestErrorHandler);

export const signup = userDetails => dispatch => Auth.signup(userDetails)
  .then((res) => {
    const { user, token } = res.data;
    dispatch(loginSuccess(user));
    toast.success('Signup successful!', { autoClose: 3000 });

    ls.set('book-a-meal', { user, token });
  })
  .catch(requestErrorHandler);

export const logout = () => ({
  type: LOGOUT
});
