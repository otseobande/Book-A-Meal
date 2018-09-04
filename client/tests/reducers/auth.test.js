import auth from '../../src/reducers/auth.js';
import { LOGIN_SUCCESS, LOGOUT } from '../../src/actions/actionTypes.js';

const user =  {
  role: 'test'
};

const state = {
  user
};

describe('auth reducer', () => {
  it('should return initial state if no type matches', () => {
    const newState = auth(state, { type: 'test' });

    expect(newState).toEqual(state);
  });
  it('should return state with loggedIn:true on LOGIN_SUCCESS action', () => {
    const newState = auth(state, {
      type: LOGIN_SUCCESS,
      payload: { user }
    });

    expect(newState).toEqual({
      ...state,
      user,
      loggedIn: true
    })
  })
  it('should return state with loggedIn:false on LOGOUT action', () => {
    const newState = auth(state, {
      type: LOGOUT
    });

    expect(newState).toEqual({
      ...state,
      loggedIn: false
    })
  })
})