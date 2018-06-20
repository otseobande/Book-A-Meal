import {
  REQUEST_MEALS_FOR_THE_DAY,
  RECIEVE_MEALS_FOR_THE_DAY
} from '../actions/actionTypes.js';

const initialState = {
  meals: [],
  isFetching: false
};

export default (state = initialState, { type, meals }) => {
  switch (type) {
    case REQUEST_MEALS_FOR_THE_DAY:
      return { ...state, isFetching: true };
    case RECIEVE_MEALS_FOR_THE_DAY:
      return {
        ...state,
        meals,
        isFetching: false
      };
    default:
      return state;
  }
};
