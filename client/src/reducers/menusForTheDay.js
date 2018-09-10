import {
  REQUEST_MENUS_FOR_THE_DAY,
  RECEIVE_MENUS_FOR_THE_DAY
} from '../actions/actionTypes.js';

const initialState = {
  menus: [],
  isFetching: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_MENUS_FOR_THE_DAY:
      return { ...state, isFetching: true };
    case RECEIVE_MENUS_FOR_THE_DAY:
      return {
        ...state,
        menus: payload.menus,
        isFetching: false
      };
    default:
      return state;
  }
};
