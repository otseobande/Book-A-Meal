import Orders from '../services/api/orders.js';
import {
  ORDER_PLACED,
  FETCH_ORDER_HISTORY_SUCCESSFUL,
  CANCEL_ORDER_SUCCESSFUL
} from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const orderPlaced = () => ({
  type: ORDER_PLACED
});

export const placeOrder = orderDetails => (dispatch) => {
  Orders.placeOrder(orderDetails)
    .then(() => {
      dispatch(orderPlaced);
    })
    .catch(requestErrorHandler);
};

export const fetchOrderHistorySuccessful = orders => ({
  type: FETCH_ORDER_HISTORY_SUCCESSFUL,
  orders
});

export const fetchOrderHistory = () => (dispatch) => {
  Orders.getOrders().then((res) => {
    const { orders } = res.data;

    dispatch(fetchOrderHistorySuccessful(orders));
  }).catch(requestErrorHandler);
};

export const cancelOrderSuccessful = order => ({
  type: CANCEL_ORDER_SUCCESSFUL,
  order
});

export const cancelOrder = orderId => (dispatch) => {
  Orders.cancelOrder(orderId)
    .then((res) => {
      const { order } = res.data;

      dispatch(cancelOrderSuccessful(order));
    })
    .catch(requestErrorHandler);
};
