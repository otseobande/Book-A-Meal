import { REQUEST_MEALS, RECEIVE_MEALS } from '../actions/actionTypes.js';

const initialState = {
  meals: [],
  isFetching: false
};

export default (state = initialState, { type, meals, pagination }) => {
  switch (type) {
    case REQUEST_MEALS:
      return { ...state, isFetching: true };
    case RECEIVE_MEALS:
      return {
        ...state,
        meals,
        pagination: pagination || state.pagination,
        isFetching: false
      };
    default:
      return state;
  }
};
