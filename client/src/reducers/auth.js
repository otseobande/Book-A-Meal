import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes.js';
import initialAuthState from '../utils/initialAuthState.js';
import ls from '../utils/securels.js';

const storedData = ls.get('book-a-meal');
const initialState = initialAuthState(storedData);

export default (state = initialState, { type, user }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user,
        loggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
