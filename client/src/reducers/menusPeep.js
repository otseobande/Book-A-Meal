import { REQUEST_PEEP_MENUS, RECEIVE_PEEP_MENUS } from '../actions/actionTypes.js';

const initialState = {
  meals: [],
  isFetching: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_PEEP_MENUS:
      return { ...state, isFetching: true };
    case RECEIVE_PEEP_MENUS:
      return {
        ...state,
        meals: payload.meals,
        isFetching: false
      };
    default:
      return state;
  }
};
