import { toast } from 'react-toastify';
import { logout } from '../actions/auth.js';
import { dispatch } from '../store.js';

/**
 * @param {Object} error Error object from an axios request
 *
 * @returns {undefined} undefined
 */
const requestErrorHandler = (error) => {
  const toastError = message => toast.error(message, {
    autoClose: 8000
  });

  if (error.response) {
    const messages = error.response.data.message;

    if (error.response.status === 401) {
      dispatch(logout());
      return toastError('You are logged out. Please login.');
    }

    if (Array.isArray(error.response.data.message)) {
      messages.forEach((message) => {
        toastError(message);
      });
    } else {
      toastError(messages);
    }
  } else if (!error.status) {
    toastError('Please check your internet connection!');
  } else {
    toastError(error.message);
  }
};

export default requestErrorHandler;
