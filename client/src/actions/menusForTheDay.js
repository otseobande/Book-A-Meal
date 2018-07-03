import Menus from '../services/api/menus';
import { REQUEST_MENUS_FOR_THE_DAY, RECIEVE_MENUS_FOR_THE_DAY } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestMenusForTheDay = () => ({
  type: REQUEST_MENUS_FOR_THE_DAY
});

export const recieveMenusForTheDay = menus => ({
  type: RECIEVE_MENUS_FOR_THE_DAY,
  menus
});

export const getMenusForTheDay = () => (dispatch) => {
  dispatch(requestMenusForTheDay());

  return Menus.getMenus()
    .then((res) => {
      const { menus } = res.data;
      dispatch(recieveMenusForTheDay(menus));
    }).catch(requestErrorHandler);
};
