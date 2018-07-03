import axiosInstance from '../../utils/axiosInstance.js';

/**
 * Auth api service class. Abstracts api calls to authentication endpoints
 *
 * @class Auth
 */
class Auth {
  /**
   *
   * @param {Object} userDetails An object with the username and password of the user
   *
   * @returns {Promise} axios promise
   */
  static login(userDetails) {
    return axiosInstance.post('/auth/login', userDetails);
  }
}

export default Auth;
