import axiosInstance from '../../utils/axiosInstance.js';

/**
 * Users api service class. Abstracts api calls to user endpoints
 *
 * @class Users
 */
class Users {
  /**
   *
   * @param {Object} userDetails An object with user signup details
   *
   * @return {Promise} axios promise
   */
  static sendResetMail(userDetails) {
    return axiosInstance().post('/users/reset_password', userDetails);
  }

  /**
   *
   * @param {Object} resetDetails credentails
   *
   * @returns {Promise} axios instance
   */
  static resetPassword(resetDetails) {
    return axiosInstance().put('/users/reset_password', resetDetails);
  }
}

export default Users;
