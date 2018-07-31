import jwtDecode from 'jwt-decode';
import isFuture from 'date-fns/is_future';

/**
 * Checks localstorage for saved user details and creates an auth state
 * object for it.
 *
 * @param {object} data - User data
 * @returns {object} - Auth state
 */
const initialAuthState = ({ token, user }) => {
  if (token && user) {
    const decodedToken = jwtDecode(token);
    const loggedIn = isFuture(decodedToken.exp * 1000);

    if (loggedIn) {
      return {
        user,
        loggedIn
      };
    }
  }

  return {
    loggedIn: false
  };
};

export default initialAuthState;
