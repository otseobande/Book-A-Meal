import { REQUEST_MENUS, RECEIVE_MENUS } from '../actions/actionTypes.js';

const initialState = {
  menus: [],
  isFetching: true
};

export default (state = initialState, { type, menus, pagination }) => {
  switch (type) {
    case REQUEST_MENUS:
      return { ...state, isFetching: true };
    case RECEIVE_MENUS:
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
