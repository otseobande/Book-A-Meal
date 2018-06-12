import axios from 'axios';
import {
  REQUEST_MEALS_FOR_THE_DAY,
  RECIEVE_MEALS_FOR_THE_DAY
} from './types';

export const requestMealsForTheDay = () => ({
  type: REQUEST_MEALS_FOR_THE_DAY
});

export const recieveMealsForTheDay = meals => ({
  type: RECIEVE_MEALS_FOR_THE_DAY,
  meals
});

export const getMealsForTheDay = () => (dispatch) => {
  dispatch(requestMealsForTheDay());

  return axios.get(`${APP_URL}/api/v1/menu`) // eslint-disable-line no-undef
    .then((res) => {
      const { menus } = res.data;
      const meals = menus.reduce((todaysMeals, menu) =>
        todaysMeals.concat(menu.categories.reduce((menuMeals, category) =>
          menuMeals.concat(category.meals), [])), []);

      dispatch(recieveMealsForTheDay(meals));
    });
};
