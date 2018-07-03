import { toast } from 'react-toastify';

/**
 * @param {Object} error Error object from an axios request
 *
 * @returns {undefined} undefined
 */
const requestErrorHandler = (error) => {
  if (error.response) {
    const messages = error.response.data.message;

    if (Array.isArray(error.response.data.message)) {
      messages.forEach((message) => {
        toast.error(message);
      });
    } else {
      toast.error(messages);
    }
  } else {
    toast.error(error.message);
  }
};

export default requestErrorHandler;
