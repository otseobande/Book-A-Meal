import axiosInstance from '../../utils/axiosInstance.js';

/**
 * Users api service class. Abstracts api calls to authentication and user endpoints
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
    return axiosInstance().post('/auth/login', userDetails);
  }

  /**
   *
   * @param {Object} userDetails An object with user signup details
   *
   * @return {Promise} axios promise
   */
  static signup(userDetails) {
    return axiosInstance().post('/auth/signup', userDetails);
  }
}

export default Auth;
