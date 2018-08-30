import axiosInstance from '../../utils/axiosInstance.js';

/**
 * Users api service class. Abstracts api calls to user endpoints
 *
 * @class Users
 */
class Users {
  /**
   * Sends a request to create a new order
   *
   * @param {Object} orderDetails New order details
   *
   * @return {Promise} axios promise
   */
  static placeOrder(orderDetails) {
    return axiosInstance().post('/orders', orderDetails);
  }

  /**
   * Get all user orders
   *
   * @param {Object} paginationInfo An object with the limit and offset for the requested resource
   *
   * @return {Promise} axios promise
   */
  static getOrders(paginationInfo = { limit: 10, page: 1 }) {
    const { limit, page } = paginationInfo;
    return axiosInstance().get(`/orders?limit=${limit}&page=${page}`);
  }

  /**
   * Sends a request to update an order
   *
   * @param {String} orderId Order id to update
   * @param {Object} orderDetails Details to update order with
   *
   * @return {Promise} axios promise
   */
  static updateOrder(orderId, orderDetails) {
    return axiosInstance().put(`/orders/${orderId}`, orderDetails);
  }

  /**
   * Sends a request to cancel an order
   *
   * @param {String} orderId Order id to update
   *
   * @return {Promise} axios promise
   */
  static cancelOrder(orderId) {
    return axiosInstance().put(`/orders/${orderId}/cancel`);
  }

  /**
   * Sends a request to mark order as delivered
   *
   * @param {Object} orderId Order id to update
   *
   * @return {Promise} axios promise
   */
  static deliverOrder(orderId) {
    return axiosInstance().put(`/orders/${orderId}/deliver`);
  }
}

export default Users;
