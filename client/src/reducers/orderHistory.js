import { RECEIVE_ORDERS, EDIT_ORDER } from '../actions/actionTypes.js';
import editOrder from '../utils/reducer-utils/editOrder.js';

const initialState = {
  isFetching: true,
  orders: [],
  pagination: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_ORDERS:
      return {
        ...state,
        isFetching: false,
        orders: payload.orders,
        pagination: payload.pagination || state.pagination
      };
    case EDIT_ORDER:
      return editOrder(state, payload);
    default:
      return state;
  }
};
