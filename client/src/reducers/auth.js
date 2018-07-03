import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes.js';
import initialAuthState from '../utils/initialAuthState.js';
import ls from '../utils/securels.js';

const initialState = initialAuthState(ls.get('book-a-meal'));

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
