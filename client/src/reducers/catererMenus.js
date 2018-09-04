import * as types from '../actions/actionTypes.js';
import { addMenu, editMenu, removeMenu } from '../utils/reducer-utils/caterer-menus-utils.js';

const initialState = {
  menus: [],
  isFetching: true,
  pagination: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REQUEST_MENUS:
      return { ...state, isFetching: true };
    case types.RECEIVE_MENUS:
      return {
        ...state,
        menus: payload.menus,
        pagination: payload.pagination || state.pagination,
        isFetching: false
      };
    case types.ADD_MENU:
      return addMenu(state, payload);
    case types.REMOVE_MENU:
      return removeMenu(state, payload);
    case types.EDIT_MENU:
      return editMenu(state, payload);
    default:
      return state;
  }
};
