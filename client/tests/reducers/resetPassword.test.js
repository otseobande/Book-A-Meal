import resetPassword from '../../src/reducers/resetPassword.js';
import { RESET_MAIL_REQUEST_SUCCESS, PASSWORD_RESET_SUCCESS } from '../../src/actions/actionTypes.js';

const state = {
  mailSent: false,
  resetSuccessful: false
};

describe('resetPassword reducer', () => {
  it('should return initial state if action type doesnt match', () => {
    const newState = resetPassword(state, {type: 'test'});

    expect(newState).toEqual(state);
  });

  it('should return state with mailSent as true if action type is RESET_MAIL_REQUEST_SUCCESS', () => {
    const newState = resetPassword(state, {
      type: RESET_MAIL_REQUEST_SUCCESS
    });

    expect(newState).toEqual({
      ...state,
      mailSent: true
    });
  });

  it('shuold return state with resetSuccessful as true if action type is PASSWORD_RESET_SUCCESS', () => {
    const newState = resetPassword(state, {
      type: PASSWORD_RESET_SUCCESS
    });

    expect(newState).toEqual({
      ...state,
      resetSuccessful: true
    });
  })
})