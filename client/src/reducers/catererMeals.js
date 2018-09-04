import * as types from '../actions/actionTypes.js';
import * as utils from '../utils/reducer-utils/caterer-meals-utils.js';

const initialState = {
  meals: [],
  isFetching: false,
  pagination: {
    page: 1
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_MEALS:
      return { ...state, isFetching: true };
    case types.RECEIVE_MEALS:
      return {
        ...state,
        meals: payload.meals,
        pagination: payload.pagination || state.pagination,
        isFetching: false
      };
    case types.ADD_MEAL:
      return utils.addMeal(state, payload);
    case types.REMOVE_MEAL:
      return utils.removeMeal(state, payload);
    case types.EDIT_MEAL:
      return utils.updateMeal(state, payload);
    default:
      return state;
  }
};
