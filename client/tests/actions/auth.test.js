import * as authActions from '../../src/actions/auth.js';
import * as types from '../../src/actions/actionTypes.js';

describe('auth actions', () => {
  const user = {
    id: 'test-id',
    role: 'caterer',
    email: 'test@gmail.com',
    username: 'test'
  };

  describe("loginSuccess action creator", () => {
    it('should return a LOGIN_SUCCESS action', () => {
      const user = {
        id: 'user-id',
        email: 'otseobande@gmail.com'
      }
      const loginSuccessAction = authActions.loginSuccess(user);

      expect(loginSuccessAction).toEqual({
        type: types.LOGIN_SUCCESS,
        payload: { user }
      })
    });
  });

  describe('logout action creator', () => {
    it("should return a LOGOUT action", () => {
      const logoutAction = authActions.logout();
      
      expect(logoutAction).toEqual({
        type: types.LOGOUT
      })
    })
  });

  describe('login action creator', () => {
    let dispatchedActions;
    beforeAll(async () => {
      await store.dispatch(authActions.login(user));
      dispatchedActions = store.getActions();
    });

    it('should dispatch login success', () => {
      const loginSuccessDispatched = dispatchedActions
        .find(action => action.type === types.LOGIN_SUCCESS);

      expect(loginSuccessDispatched).toBeTruthy();
    });

    it('should dispatch a @@router/CALL_HISTORY_METHOD (PUSH) action', () => {
      const pushDispatched = dispatchedActions
        .find(action => action.type === '@@router/CALL_HISTORY_METHOD');

      expect(pushDispatched).toBeTruthy();
    })
  });

  describe('signup action creator', () => {
    let dispatchedActions;
    beforeAll(async () => {
      await store.dispatch(authActions.signup(user));
      dispatchedActions = store.getActions();
    });

    it('should dispatch login success', () => {
      const loginSuccessDispatched = dispatchedActions
        .find(action => action.type === types.LOGIN_SUCCESS);

      expect(loginSuccessDispatched).toBeTruthy();
    });

    it('should dispatch a @@router/CALL_HISTORY_METHOD (PUSH) action', () => {
      const pushDispatched = dispatchedActions
        .find(action => action.type === '@@router/CALL_HISTORY_METHOD');

      expect(pushDispatched).toBeTruthy();
    })
  })

  afterAll(() => {
    store.clearActions()
  });
})