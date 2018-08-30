import {
  REQUEST_MENUS_FOR_THE_DAY,
  RECEIVE_MENUS_FOR_THE_DAY
} from '../actions/actionTypes.js';

const initialState = {
  menus: [],
  isFetching: true
};

export default (state = initialState, { type, menus, pagination }) => {
  switch (type) {
    case REQUEST_MENUS_FOR_THE_DAY:
      return { ...state, isFetching: true };
    case RECEIVE_MENUS_FOR_THE_DAY:
      return {
        ...state,
        menus,
        pagination: pagination || state.pagination,
        isFetching: false
      };
    default:
      return state;
  }
};
