import Orders from '../services/api/orders.js';
import {
  ORDER_PLACED,
  RECEIVE_ORDERS,
  EDIT_ORDER

} from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const orderPlaced = () => ({
  type: ORDER_PLACED
});

export const editOrder = order => ({
  type: EDIT_ORDER,
  payload: {
    order
  }
});

export const placeOrder = orderDetails => dispatch => Orders.placeOrder(orderDetails)
  .then(() => {
    dispatch(orderPlaced());
  })
  .catch(requestErrorHandler);

export const receiveOrders = (orders, pagination) => ({
  type: RECEIVE_ORDERS,
  payload: {
    orders,
    pagination
  }
});

export const fetchOrderHistory = paginationInfo => dispatch => Orders.getOrders(paginationInfo)
  .then((res) => {
    const { orders, pagination } = res.data;

    dispatch(receiveOrders(orders, pagination));
  })
  .catch(requestErrorHandler);

export const cancelOrder = orderId => dispatch => Orders.cancelOrder(orderId)
  .then((res) => {
    const { order } = res.data;

    dispatch(editOrder(order));
  })
  .catch(requestErrorHandler);


export const deliverOrder = orderId => dispatch => Orders.deliverOrder(orderId)
  .then((res) => {
    const { order } = res.data;

    dispatch(editOrder(order));
  })
  .catch(requestErrorHandler);


export const updateOrder = (orderId, orderDetails) => dispatch =>
  Orders.updateOrder(orderId, orderDetails)
    .then((res) => {
      const { order } = res.data;

      dispatch(editOrder(order));
    })
    .catch(requestErrorHandler);
