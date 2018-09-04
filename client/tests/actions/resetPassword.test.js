import * as resetPasswordActions from '../../src/actions/resetPassword.js';
import * as types from '../../src/actions/actionTypes.js';

describe('resetPassword actions', () => {
  describe('resetMailRequestSuccess action creator', () => {
    it('should return RESET_MAIL_REQUEST_SUCCESS action', () => {
      const resetMailRequestSuccessAction = resetPasswordActions.resetMailRequestSuccess();

      expect(resetMailRequestSuccessAction).toEqual({
        type: types.RESET_MAIL_REQUEST_SUCCESS,
      })
    });
  });
  describe('passwordResetSuccess action creator', () => {
    it('should return PASSWORD_RESET_SUCCESS action', () => {
      const passwordResetSuccessAction = resetPasswordActions.passwordResetSuccess();

      expect(passwordResetSuccessAction).toEqual({
        type: types.PASSWORD_RESET_SUCCESS
      });
    });
  });

  describe('sendResetMail action creator', () => {
    it('should dispatch RESET_MAIL_REQUEST_SUCCESS action', async () => {
      await store.dispatch(resetPasswordActions.sendResetMail());
      const dispatchedActions = store.getActions();

      const resetMailRequestSuccessDispatched = dispatchedActions
        .find(action => action.type === types.RESET_MAIL_REQUEST_SUCCESS);

      expect(resetMailRequestSuccessDispatched).toBeTruthy();
    });
  });

  describe('resetPassword action creator', () => {
    it('should dipatch PASSWORD_RESET_SUCCESS action', async () => {
      await store.dispatch(resetPasswordActions.resetPassword());
      const dispatchedActions = store.getActions();

      const passwordResetSuccessDispatched = dispatchedActions
        .find(action => action.type === types.PASSWORD_RESET_SUCCESS);

      expect(passwordResetSuccessDispatched).toBeTruthy();
    })
  })
  afterAll(store.clearActions)
});