import * as catererMenusActions from '../../src/actions/catererMenus.js';
import * as types from '../../src/actions/actionTypes.js';

describe('catererMenus actions', () => {
  const menu = {
    id: 'test-menu'
  };
  const menus = [menu];
  const pagination = {
    page: 1,
    limit: 10
  };

  describe('recieveMenus action creator', () => {
    const receiveMenusAction = catererMenusActions.receiveMenus(menus, pagination);
    it('should return RECEIVE_MENUS action with payload', () => {
      expect(receiveMenusAction).toEqual({
        type: types.RECEIVE_MENUS,
        payload: { menus, pagination }
      })
    });
  });

  describe('requestMenus action creator', () => {
    const requestMenusAction = catererMenusActions.requestMenus();
    it('should return REQUEST_MENUS action', () => {
      expect(requestMenusAction).toEqual({
        type: types.REQUEST_MENUS
      })
    });
  });

  describe('addMenu action creator', () => {
    const addMenuAction = catererMenusActions.addMenu(menu);
    it('should return ADD_MENU action with payload', () => {
      expect(addMenuAction).toEqual({
        type: types.ADD_MENU,
        payload: { menu }
      });
    });
  });

  describe('editMenu action creator', () => {
    const editMenuAction = catererMenusActions.editMenu(menu);
    it('should return EDIT_MENU action with payload', () => {
      expect(editMenuAction).toEqual({
        type: types.EDIT_MENU,
        payload: { menu }
      });
    });
  })

  describe('removeMenu action creator', () => {
    const removeMenuAction = catererMenusActions.removeMenu(menu);
    it('should return REMOVE_MENU action with payload', () => {
      expect(removeMenuAction).toEqual({
        type: types.REMOVE_MENU,
        payload: { menu }
      });
    });
  });

  describe('getMenus action creator', () => {
    let dispatchedActions;
    beforeAll(async () => {
      await store.dispatch(catererMenusActions.getMenus());
      dispatchedActions = store.getActions();
    });

    it('should dispatch RECEIVE_MENUS action', () => {
      const receiveMenusDispatched = dispatchedActions
        .find(action => action.type === types.RECEIVE_MENUS);

      expect(receiveMenusDispatched).toBeTruthy();
    });

    it('should dispatch REQUEST_MENUS action', () => {
      const requestMenusDispatched = dispatchedActions
        .find(action => action.type === types.REQUEST_MENUS);

      expect(requestMenusDispatched).toBeTruthy();
    });
  });

  describe('setMenu action creator', () => {
    it('should dispatch ADD_MENU action', async () => {
      await store.dispatch(catererMenusActions.setMenu(menu));
      const dispatchedActions = store.getActions();
      
      const addMenuDispatched = dispatchedActions
        .find(action => action.type === types.ADD_MENU);

      expect(addMenuDispatched).toBeTruthy();
    });
  })

  describe('deleteMenu action creator', () => {
    it('should dispatch REMOVE_MENU action', async () => {
      await store.dispatch(catererMenusActions.deleteMenu(menu));
      const dispatchedActions = store.getActions();

      const removeMenuDispatched = dispatchedActions
        .find(action => action.type === types.REMOVE_MENU);

      expect(removeMenuDispatched).toBeTruthy();
    });
  });

  describe('changeMenu action creator', () => {
    it('should dispatch EDIT_MENU action', async () => {
      await store.dispatch(catererMenusActions.changeMenu(menu));
      const dispatchedActions = store.getActions();

      const changeMenuDispatched = dispatchedActions
        .find(action => action.type === types.EDIT_MENU);

      expect(changeMenuDispatched).toBeTruthy();
    });
  });

  afterAll(() => {
    store.clearActions()
  });
});