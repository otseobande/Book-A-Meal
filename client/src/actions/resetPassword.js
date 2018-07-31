import Users from '../services/api/users.js';
import { RESET_MAIL_REQUEST_SUCCESS, PASSWORD_RESET_SUCCESS } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const resetMailRequestSuccess = () => ({
  type: RESET_MAIL_REQUEST_SUCCESS
});

export const sendResetMail = userDetails => (dispatch) => {
  Users.sendResetMail(userDetails).then(() => {
    dispatch(resetMailRequestSuccess());
  }).catch(requestErrorHandler);
};

export const passwordResetSuccess = () => ({
  type: PASSWORD_RESET_SUCCESS
});

export const resetPassword = resetDetails => (dispatch) => {
  Users.resetPassword(resetDetails).then(() => {
    dispatch(passwordResetSuccess());
  }).catch(requestErrorHandler);
};
