import catererMeals from '../../src/reducers/catererMeals.js';
import { REQUEST_MEALS, RECEIVE_MEALS } from '../../src/actions/actionTypes.js';

const state = {
  meals: [1,3]
}
describe("catererMeals reducer", () => {
  it('should return initial state if action type is undefined', () => {
    const newState = catererMeals(state, {type: undefined});

    expect(newState).toEqual(state);
  })

  it('should return state with isFetching:true on REQUEST_MEALS action', () => {
    const newState = catererMeals(state, {type: REQUEST_MEALS});

    expect(newState).toEqual({
      ...state,
      isFetching: true
    })
  })

  it('should return state with isFetching:false with meals and pagination on RECEIVE_MEALS action', () => {
    const newState = catererMeals(state, {
      type: RECEIVE_MEALS,
      meals: [],
      pagination: {}
    });

    expect(newState).toEqual({
      ...state,
      meals: [],
      pagination: {},
      isFetching: false
    })
  })
})