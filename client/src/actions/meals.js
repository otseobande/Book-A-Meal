import Meals from '../services/api/meals.js';
import { REQUEST_MEALS, RECIEVE_MEALS } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestMeals = () => ({
  type: REQUEST_MEALS
});

export const recieveMeals = meals => ({
  type: RECIEVE_MEALS,
  meals
});

export const getMeals = () => (dispatch) => {
  dispatch(requestMeals());

  Meals.getMeals()
    .then((res) => {
      const { meals } = res.data;
      dispatch(recieveMeals(meals));
    })
    .catch(requestErrorHandler);
};

