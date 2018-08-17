import catererMenus from '../../src/reducers/catererMenus.js';
import { REQUEST_MENUS, RECEIVE_MENUS } from '../../src/actions/actionTypes.js';

const state = {
  menus: [1,3]
}
describe("catererMenus reducer", () => {
  it('should return initial state if action type is undefined', () => {
    const newState = catererMenus(state, {type: undefined});

    expect(newState).toEqual(state);
  })

  it('should return state with isFetching:true on REQUEST_MENUS action', () => {
    const newState = catererMenus(state, {type: REQUEST_MENUS});

    expect(newState).toEqual({
      ...state,
      isFetching: true
    })
  })

  it('should return state with isFetching:false with meals and pagination on RECEIVE_MENUS action', () => {
    const newState = catererMenus(state, {
      type: RECEIVE_MENUS,
      menus: [],
      pagination: {}
    });

    expect(newState).toEqual({
      ...state,
      menus: [],
      pagination: {},
      isFetching: false
    })
  })
})