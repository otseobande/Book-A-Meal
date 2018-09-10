import menusForTheDay from '../../src/reducers/menusForTheDay.js';
import {
  REQUEST_MENUS_FOR_THE_DAY,
  RECEIVE_MENUS_FOR_THE_DAY
} from '../../src/actions/actionTypes.js';

const state = {
  menus: [],
  isFetching: false
};

describe('menusForTheDay reducer', () => {
  it('should return initial state if action type dont match', () => {
    const newState = menusForTheDay(state, { type: 'action' });

    expect(newState).toEqual(state);
  });

  it('should return new state with isFetching as true on REQUEST_MENUS_FOR_THE_DAY action', () => {
    const newState = menusForTheDay(state, {
      type: REQUEST_MENUS_FOR_THE_DAY
    });

    expect(newState).toEqual({
      ...state,
      isFetching: true
    })
  });

  it('should return new state with isFetching as false on RECEIVE_MENUS_FOR_THE_DAY action and maps other payload', () => {
    const payload = {
      menus: ['test']
    }

    const newState = menusForTheDay(state, {
      type: RECEIVE_MENUS_FOR_THE_DAY,
      payload
    });

    expect(newState).toEqual({
      ...state,
      menus: payload.menus,
      isFetching: false
    });
  })
})