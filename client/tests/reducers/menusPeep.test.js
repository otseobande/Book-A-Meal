import menusPeep from '../../src/reducers/menusPeep.js';
import { REQUEST_PEEP_MENUS, RECEIVE_PEEP_MENUS } from '../../src/actions/actionTypes.js';

const state = {
  meals: [],
  isFetching: false
};

describe('menusPeep reducer', () => {
  it('should return default state if action type dont match types', () => {
    const newState = menusPeep(state, {type: 'test'});

    expect(newState).toEqual(state);
  });

  it('should return state with isFetching as false on REQUEST_PEEP_MENUS action', () => {
    const newState = menusPeep(state, {
      type: REQUEST_PEEP_MENUS
    });

    expect(newState).toEqual({
      ...state,
      isFetching: true
    });
  });

  it('should return state with isFetching as false and meals on RECEIVE_PEEP_MENUS acttion', () => {
    const payload =  {
      meals: ['test']
    }
    const newState = menusPeep(state, {
      type: RECEIVE_PEEP_MENUS,
      payload
    });

    expect(newState).toEqual({
      ...state,
      meals: payload.meals,
      isFetching: false
    });
  })

});