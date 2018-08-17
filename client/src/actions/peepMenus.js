import Menus from '../services/api/menus';
import { REQUEST_PEEP_MENUS, RECEIVE_PEEP_MENUS } from './actionTypes.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const requestPeepMenus = () => ({
  type: REQUEST_PEEP_MENUS
});

export const receivePeepMenus = meals => ({
  type: RECEIVE_PEEP_MENUS,
  meals
});

export const peepMenus = () => (dispatch) => {
  dispatch(requestPeepMenus());

  return Menus.peep()
    .then((res) => {
      const { meals } = res.data;
      dispatch(receivePeepMenus(meals));
    }).catch(requestErrorHandler);
};
