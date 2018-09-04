import dateFormat from 'date-fns/format';
import axiosInstance from '../../utils/axiosInstance.js';

/**
 * Menus api service class. Abstracts api calls to the menu endpoints
 *
 * @class Menus
 */
class Menus {
  /**
   * Gets meals from 10 random menus for the day
   *
   * @returns {Promise} axios promise
   */
  static peep() {
    return axiosInstance().get('/menu/peep');
  }

  /**
   * Sends a request to get Menus for a specified date. Gets the menus for today
   * if no date is specified
   *
   * @param {string} date (optional) String with date in YYYY-MM-DD format
   *
   * @returns {Promise} axios promise
   */
  static getSpecificMenu(date) {
    if (!date) {
      return axiosInstance().get('/menu');
    }

    const formattedDate = dateFormat(date, 'YYYY-MM-DD');

    return axiosInstance().get(`/menu/${formattedDate}`);
  }

  /**
   * Gets all menus created by a user
   *
   * @static
   * @returns {Promise} axois promise
   * @memberof Menus
   */
  static getMenus() {
    return axiosInstance().get('/menus');
  }

  /**
   * Sends a request to create a menu
   *
   * @param {Object} menuData Details to create the menu with
   *
   * @returns {Promise} axios promise
   */
  static setMenu(menuData) {
    return axiosInstance().post('/menu', menuData);
  }

  /**
   * Sends a request to edit the menu for the date specified.
   *
   * @param {Object} menuData Details to update the menu with
   *
   * @returns {Promise} axios promise
   */
  static editMenu(menuData) {
    const formattedDate = dateFormat(menuData.date, 'YYYY-MM-DD');

    return axiosInstance().put(`/menu/${formattedDate}`, menuData);
  }

  /**
   * Sends a request to delete the menu for the date specified.
   *
   * @param {string} date String with date in YYYY-MM-DD format
   *
   * @returns {Promise} axios promise
   */
  static deleteMenu(date) {
    const formattedDate = dateFormat(date, 'YYYY-MM-DD');

    return axiosInstance().delete(`/menu/${formattedDate}`);
  }
}

export default Menus;

