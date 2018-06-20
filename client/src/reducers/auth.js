import { LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes.js';

const initialState = {
  user: {},
  loggedIn: false
};

export default (state = initialState, { type, userDetails }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: userDetails.user,
        loggedIn: true
      };
    case LOGOUT:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
