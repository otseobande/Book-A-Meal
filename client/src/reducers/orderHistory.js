import { FETCH_ORDER_HISTORY_SUCCESSFUL, CANCEL_ORDER_SUCCESSFUL } from '../actions/actionTypes.js';

const initialState = {
  isFetching: true
};

export default (state = initialState, { type, orders, order }) => {
  switch (type) {
    case FETCH_ORDER_HISTORY_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        orders
      };
      
    default:
      return state;
  }
};
