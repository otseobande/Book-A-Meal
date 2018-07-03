import Menus from '../services/api/menus';
import { REQUEST_PEEP_MENUS, RECIEVE_PEEP_MENUS } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestPeepMenus = () => ({
  type: REQUEST_PEEP_MENUS
});

export const recievePeepMenus = meals => ({
  type: RECIEVE_PEEP_MENUS,
  meals
});

export const peepMenus = () => (dispatch) => {
  dispatch(requestPeepMenus());

  return Menus.peep()
    .then((res) => {
      const { meals } = res.data;
      dispatch(recievePeepMenus(meals));
    }).catch(requestErrorHandler);
};
