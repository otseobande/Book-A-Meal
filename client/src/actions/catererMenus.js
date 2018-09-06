import * as types from './actionTypes';
import Menus from '../services/api/menus.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const receiveMenus = (menus, pagination) => ({
  type: types.RECEIVE_MENUS,
  payload: {
    menus,
    pagination
  }
});

export const requestMenus = () => ({
  type: types.REQUEST_MENUS
});

export const addMenu = menu => ({
  type: types.ADD_MENU,
  payload: {
    menu
  }
});

export const editMenu = menu => ({
  type: types.EDIT_MENU,
  payload: {
    menu
  }
});

export const removeMenu = menu => ({
  type: types.REMOVE_MENU,
  payload: {
    menu
  }
});

export const setMenu = menuDetails => dispatch => Menus.setMenu(menuDetails)
  .then((res) => {
    const { menu } = res.data;

    dispatch(addMenu(menu));
  })
  .catch(requestErrorHandler);

export const getMenus = paginationInfo => (dispatch) => {
  dispatch(requestMenus());

  return Menus.getMenus(paginationInfo)
    .then((res) => {
      const { menus, pagination } = res.data;

      dispatch(receiveMenus(menus, pagination));
    })
    .catch(requestErrorHandler);
};

export const deleteMenu = menu => dispatch => Menus.deleteMenu(menu.date)
  .then(() => {
    dispatch(removeMenu(menu));
  })
  .catch(requestErrorHandler);

export const changeMenu = menuDetails => dispatch => Menus.editMenu(menuDetails)
  .then((res) => {
    const { menu } = res.data;

    dispatch(editMenu(menu));
  })
  .catch(requestErrorHandler);
