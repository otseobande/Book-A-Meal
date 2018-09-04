import * as types from '../../src/actions/actionTypes.js';
import * as peepMenuActions from '../../src/actions/peepMenus.js';

describe('peepMenus actions', () => {
  describe('requestPeepMenus action creator', () => {
    it('should return REQUEST_PEEP_MENUS action', () => {
      const requestPeepMenusAction = peepMenuActions.requestPeepMenus();

      expect(requestPeepMenusAction).toEqual({
        type: types.REQUEST_PEEP_MENUS
      });
    });
  });

  describe('receivePeepMenus action creator', () => {
    it('should return RECEIVE_PEEP_MENUS action', () => {
      const receivePeepMenusAction = peepMenuActions.receivePeepMenus([]);

      expect(receivePeepMenusAction).toEqual({
        type: types.RECEIVE_PEEP_MENUS,
        payload: {
          meals: []
        }
      });
    });
  });

  describe('peepMenus action creator', () => {
    let dispatchedActions;
    beforeAll(async () => {
      await store.dispatch(peepMenuActions.peepMenus());
      dispatchedActions = store.getActions();
    });
    it('should dispatch REQUEST_PEEP_MENUS action', () => {
      const requestPeepMenusDispatched = dispatchedActions
        .find(action => action.type === types.REQUEST_PEEP_MENUS);

      expect(requestPeepMenusDispatched).toBeTruthy();
    });
    it('should dispatch RECEIVE_PEEP_MENUS action', () => {
      const receivePeepMenusDispatched = dispatchedActions
        .find(action => action.type === types.RECEIVE_PEEP_MENUS);

      expect(receivePeepMenusDispatched).toBeTruthy();
    })
    afterAll(store.clearActions)
  })

});