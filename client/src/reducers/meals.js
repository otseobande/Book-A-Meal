import { REQUEST_MEALS, RECIEVE_MEALS } from '../actions/actionTypes.js';

const initialState = {
  meals: [],
  isFetching: false
};

export default (state = initialState, { type, meals }) => {
  switch (type) {
    case REQUEST_MEALS:
      return { ...state, isFetching: true };
    case RECIEVE_MEALS:
      return {
        ...state,
        meals,
        isFetching: false
      };
    default:
      return state;
  }
};
