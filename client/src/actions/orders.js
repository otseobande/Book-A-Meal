import Orders from '../services/api/orders.js';
import {
  ORDER_PLACED,
  RECEIVE_ORDERS
} from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const orderPlaced = () => ({
  type: ORDER_PLACED
});

export const placeOrder = orderDetails => dispatch => Orders.placeOrder(orderDetails)
  .then(() => {
    dispatch(orderPlaced);
  })
  .catch(requestErrorHandler);

export const receiveOrders = (orders, pagination) => ({
  type: RECEIVE_ORDERS,
  orders,
  pagination
});

export const fetchOrderHistory = paginationInfo => dispatch => Orders.getOrders(paginationInfo)
  .then((res) => {
    const { orders, pagination } = res.data;

    dispatch(receiveOrders(orders, pagination));
  })
  .catch(requestErrorHandler);

const updateOrders = (updatedOrder, getState) => {
  const orders = getState().orderHistory.orders.slice();
  return orders.map((order) => {
    if (order.id === updatedOrder.id) {
      return updatedOrder;
    }
    return order;
  });
};

export const cancelOrder = orderId => (dispatch, getState) => Orders.cancelOrder(orderId)
  .then((res) => {
    const { order, pagination } = res.data;
    const updatedOrders = updateOrders(order, getState);

    dispatch(receiveOrders(updatedOrders, pagination));
  })
  .catch(requestErrorHandler);


export const deliverOrder = orderId => (dispatch, getState) => Orders.deliverOrder(orderId)
  .then((res) => {
    const { order, pagination } = res.data;
    const updatedOrders = updateOrders(order, getState);

    dispatch(receiveOrders(updatedOrders, pagination));
  })
  .catch(requestErrorHandler);


export const updateOrder = (orderId, orderDetails) => (dispatch, getState) =>
  Orders.updateOrder(orderId, orderDetails)
    .then((res) => {
      const { order, pagination } = res.data;
      const updatedOrders = updateOrders(order, getState);

      dispatch(receiveOrders(updatedOrders, pagination));
    })
    .catch(requestErrorHandler);
