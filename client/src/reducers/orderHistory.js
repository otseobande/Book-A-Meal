import { RECEIVE_ORDERS } from '../actions/actionTypes.js';

const initialState = {
  isFetching: true,
  orders: [],
  pagination: {}
};

export default (state = initialState, { type, orders, pagination }) => {
  switch (type) {
    case RECEIVE_ORDERS:
      return {
        ...state,
        isFetching: false,
        orders,
        pagination: pagination || state.pagination
      };
    default:
      return state;
  }
};
