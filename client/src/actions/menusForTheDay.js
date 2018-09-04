import Menus from '../services/api/menus';
import { REQUEST_MENUS_FOR_THE_DAY, RECEIVE_MENUS_FOR_THE_DAY } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestMenusForTheDay = () => ({
  type: REQUEST_MENUS_FOR_THE_DAY
});

export const receiveMenusForTheDay = menus => ({
  type: RECEIVE_MENUS_FOR_THE_DAY,
  payload: {
    menus
  }
});

export const getMenusForTheDay = () => (dispatch) => {
  dispatch(requestMenusForTheDay());

  return Menus.getSpecificMenu(new Date())
    .then((res) => {
      const { menus } = res.data;
      dispatch(receiveMenusForTheDay(menus));
    })
    .catch(requestErrorHandler);
};
