import axios from 'axios';
import {
  REQUEST_MENUS_FOR_THE_DAY,
  SAVE_MENUS_FOR_THE_DAY
} from './types';

const requestMenusForTheDay = () => ({
  type: REQUEST_MENUS_FOR_THE_DAY
});

const saveMenusForTheDay = menus => ({
  type: SAVE_MENUS_FOR_THE_DAY,
  menus,
  meals: menus.reduce((todaysMeals, menu) =>
    todaysMeals.concat(menu.categories.reduce((menuMeals, category) =>
      menuMeals.concat(category.meals), [])), [])
});

const getMenusForTheDay = () => (dispatch) => {
  dispatch(requestMenusForTheDay());
  return axios.get(`${APP_URL}/api/v1/menu`) // eslint-disable-line no-undef
    .then((res) => {
      const { menus } = res.data;

      dispatch(saveMenusForTheDay(menus));
    });
};

export default {
  requestMenusForTheDay,
  getMenusForTheDay,
  saveMenusForTheDay
};

