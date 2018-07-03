import { REQUEST_PEEP_MENUS, RECIEVE_PEEP_MENUS } from '../actions/actionTypes.js';

const initialState = {
  meals: [],
  isFetching: false
};

export default (state = initialState, { type, meals }) => {
  switch (type) {
    case REQUEST_PEEP_MENUS:
      return { ...state, isFetching: true };
    case RECIEVE_PEEP_MENUS:
      return {
        ...state,
        meals,
        isFetching: false
      };
    default:
      return state;
  }
};
