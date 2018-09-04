import catererMenus from '../../src/reducers/catererMenus.js';
import {
  REQUEST_MENUS,
  RECEIVE_MENUS,
  ADD_MENU,
  REMOVE_MENU,
  EDIT_MENU
} from '../../src/actions/actionTypes.js';

const state = {
  menus: [{
    id: '234dfaf',
    date: '2014-04-05'
  }, {
    id: '34u9sfh',
    date: '2028-04-02'
  }],
  pagination: {
    page: 1
  }
}
describe("catererMenus reducer", () => {
  it('should return initial state if action type is undefined', () => {
    const newState = catererMenus(state, {type: undefined});

    expect(newState).toEqual(state);
  })

  it('should return state with isFetching as true on REQUEST_MENUS action', () => {
    const newState = catererMenus(state, {type: REQUEST_MENUS});

    expect(newState).toEqual({
      ...state,
      isFetching: true
    })
  })

  it('should return state with isFetching as false with meals and pagination on RECEIVE_MENUS action', () => {
    const newState = catererMenus(state, {
      type: RECEIVE_MENUS,
      payload: {
        menus: [],
        pagination: {}
      }
    });

    expect(newState).toEqual({
      ...state,
      menus: [],
      pagination: {},
      isFetching: false
    })
  });

  it('should return state with isFetching as false with meals and pagination on RECEIVE_MENUS action if pagination is not in payload', () => {
    const newState = catererMenus(state, {
      type: RECEIVE_MENUS,
      payload: {
        menus: []
      }
    });

    expect(newState).toEqual({
      ...state,
      menus: [],
      pagination: state.pagination,
      isFetching: false
    })
  });

  it('should return state with new menu on ADD_MENU action', () => {
    const menu = {
      id: 'test-menu',
      date: '2018-04-05'
    };
    const newState = catererMenus(state, {
      type: ADD_MENU,
      payload: {menu}
    });
    expect(newState.menus).toContain(menu);
  });

  it('should return state without menu on REMOVE_MENU action', () => {
    const menu = {
      id: '34u9sfh',
      date: '2028-04-02'
    }

    const newState = catererMenus(state, {
      type: REMOVE_MENU,
      payload: { menu }
    });

    expect(newState.menus).not.toContain(menu);
  });

  it('should return state with edited menu on EDIT_MENU action', () => {
    const menu = {
      id: '34u9sfh',
      date: '2028-04-02',
      categories: []
    }
    const newState = catererMenus(state, {
      type: EDIT_MENU,
      payload: { menu }
    });

    expect(newState.menus).toContain(menu);
  });
})