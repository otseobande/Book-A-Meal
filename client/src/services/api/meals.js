import axiosInstance from '../../utils/axiosInstance.js';

/**
 * @class Meals
 */
class Meals {
  /**
   * Sends a request to create a new meal
   *
   * @param {Object} mealDetails An object containing required fields
   * to create a meal (title, description etc)
   *
   * @returns {Promise} Axios promise
   */
  static createMeal(mealDetails) {
    return axiosInstance().post('/meals', mealDetails);
  }


  /**
   * Makes a request to get meals created by a user
   *
   * @returns {Promise} Axois promise
   */
  static getMeals() {
    return axiosInstance().get('/meals');
  }

  /**
   * Makes a request to get a particular meal
   *
   * @param {String} mealId Meal UUID
   *
   * @returns {Promise} Axois promise
   */
  static getMeal(mealId) {
    return axiosInstance().get(`/meals/${mealId}`);
  }

  /**
   * Makes a request to update a meal
   *
   * @param {String} mealId Meal UUID
   * @param {Object} mealDetails An object containing required fields
   * to create a meal (title, description etc)
   *
   * @returns {Promise} Axois promise
   */
  static updateMeal(mealId, mealDetails) {
    return axiosInstance().put(`/meals/${mealId}`, mealDetails);
  }

  /**
   * Makes a request to delete a meal
   *
   * @param {String} mealId Meal UUID
   *
   * @returns {Promise} Axois promise
   */
  static deleteMeal(mealId) {
    return axiosInstance().delete(`/meals/${mealId}`);
  }
}

export default Meals;
