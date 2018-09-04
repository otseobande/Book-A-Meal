import * as mfdActions from '../../src/actions/menusForTheDay.js';
import * as types from '../../src/actions/actionTypes.js';

describe('menusForTheDay actions', () => {
  describe('requestMenusForTheDay action creator', () => {
    it('should return REQUEST_MENUS_FOR_THE_DAY action', () => {
      const requestMenusForTheDayAction = mfdActions.requestMenusForTheDay();

      expect(requestMenusForTheDayAction).toEqual({
        type: types.REQUEST_MENUS_FOR_THE_DAY
      });
    });
  });

  describe('receiveMenusForTheDay action creator', () => {
    it('should return RECEIVE_MENUS_FOR_THE_DAY action', () => {
      const receiveMenusForTheDayAction = mfdActions.receiveMenusForTheDay({});

      expect(receiveMenusForTheDayAction).toEqual({
        type: types.RECEIVE_MENUS_FOR_THE_DAY,
        payload: {
          menus: {}
        }
      });
    });
  });

  describe('getMenusForTheDay action creator', () => {
    let dispatchedActions;
    beforeAll(async () => {
      await store.dispatch(mfdActions.getMenusForTheDay());
      dispatchedActions = store.getActions();
    });
    it('should dispatch REQUEST_MENUS_FOR_THE_DAY action', () => {
      const requestMenusForTheDayDispatched = dispatchedActions
        .find(action => action.type === types.REQUEST_MENUS_FOR_THE_DAY);

      expect(requestMenusForTheDayDispatched).toBeTruthy();
    });
    it('should dispatch RECEIVE_MENUS_FOR_THE_DAY action', () => {
      const receiveMenusForTheDayDispatched = dispatchedActions
        .find(action => action.type === types.RECEIVE_MENUS_FOR_THE_DAY);

      expect(dispatchedActions).toBeTruthy();
    });

  })

  afterAll(() => {
    store.clearActions()
  });
});