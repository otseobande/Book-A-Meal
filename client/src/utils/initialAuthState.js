import jwtDecode from 'jwt-decode';
import isFuture from 'date-fns/is_future';

/**
 * Checks localstorage for saved user details and creates a auth state
 * object for it.
 * @param {object} data - User data
 * @returns {object} - Auth state
 */
const initialAuthState = (data) => {
  const state = {
    user: {},
    loggedIn: false
  };

  if (data) {
    if (data.token) {
      const decodedToken = jwtDecode(data.token);
      state.loggedIn = isFuture(decodedToken.exp * 1000);
    }
    if (data.user) {
      state.user = data.user;
    }
  }

  return state;
};

export default initialAuthState;
