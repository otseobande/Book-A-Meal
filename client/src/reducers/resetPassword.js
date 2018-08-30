import { RESET_MAIL_REQUEST_SUCCESS, PASSWORD_RESET_SUCCESS } from '../actions/actionTypes.js';

const initialState = {
  mailSent: false,
  resetSuccessful: false
};

export default (state = initialState, { type }) => {
  switch (type) {
    case RESET_MAIL_REQUEST_SUCCESS:
      return {
        ...state,
        mailSent: true
      };
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        resetSuccessful: true
      };
    default:
      return state;
  }
};
