import catererMeals from '../../src/reducers/catererMeals.js';
import * as types from '../../src/actions/actionTypes.js';

const state = {
  meals: [{
    id: '23',
    title: 'rice',
    price: 324,
    img: 'ade.jpg'
  }, {
    id: '24',
    title: 'spag',
    price: 400,
    img: 'pic.jpg'
  }],
  pagination: {
    page: 1
  }
}

describe("catererMeals reducer", () => {
  it('should return initial state if action type is undefined', () => {
    const newState = catererMeals(state, {type: undefined});

    expect(newState).toEqual(state);
  })

  it('should return state with isFetching as true on REQUEST_MEALS action', () => {
    const newState = catererMeals(state, {type: types.REQUEST_MEALS});

    expect(newState).toEqual({
      ...state,
      isFetching: true
    })
  })

  it('should return state with isFetching as false with meals and pagination on RECEIVE_MEALS action', () => {
    const newState = catererMeals(state, {
      type: types.RECEIVE_MEALS,
      payload: {
        meals: [],
        pagination: {}
      }
    });

    expect(newState).toEqual({
      ...state,
      meals: [],
      pagination: {},
      isFetching: false
    })
  });

  it('should return retain state pagination if pagination not in payload on RECEIVE_MEALS action', () => {
    const newState = catererMeals(state, {
      type: types.RECEIVE_MEALS,
      payload: {
        meals: [],
      }
    });

    expect(newState).toEqual({
      ...state,
      meals: [],
      pagination: state.pagination,
      isFetching: false
    })
  });

  it('should add meal to state on ADD_MEAL action', () => {
    const meal = {
      id: 'test',
      title: 'test-meal',
      price: 324,
      img: 'picture.jpg'
    }
    const newState = catererMeals(state, {
      type: types.ADD_MEAL,
      payload: { meal }
    });

    expect(newState.meals).toContain(meal);
  });

  it('should remove meal from state on REMOVE_MEAL action', () => {
    const meal = state.meals[0];
    const newState = catererMeals(state, {
      type: types.REMOVE_MEAL,
      payload: { meal }
    });

    expect(newState.meals).not.toContain(meal);
  });

  it('should edit meal in state on EDIT_MEAL action', () => {
    const meal = {
      id: '23',
      title: 'beans',
      price: 324,
      img: 'ade.jpg'
    }
    const newState = catererMeals(state, {
      type: types.EDIT_MEAL,
      payload: { meal }
    });

    const updatedMeal = newState.meals.find(stateMeal =>{
      return stateMeal.id === meal.id
    });

    expect(meal).toEqual(updatedMeal);
  })
})