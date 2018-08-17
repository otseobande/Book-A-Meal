import { RECEIVE_MENUS, REQUEST_MENUS } from './actionTypes';
import Menus from '../services/api/menus.js';
import requestErrorHandler from '../utils/requestErrorHandler.js';

export const receiveMenus = (menus, pagination) => ({
  type: RECEIVE_MENUS,
  menus,
  pagination
});

export const requestMenus = () => ({
  type: REQUEST_MENUS
});

const getMenusFromStateAndAddNew = (menu, getState) => {
  const menus = getState().catererMenus.menus.slice();
  const updatedMenus = [menu, ...menus];

  return updatedMenus;
};

const getMenusFromStateAndRemoveOne = (menuDate, getState) => {
  const menus = getState().catererMenus.menus.slice();
  const updatedMenus = menus.filter(menu => menu.date !== menuDate);

  return updatedMenus;
};

const getMenusFromStateAndReplaceOne = (updatedMenu, getState) => {
  const menus = getState().catererMenus.menus.slice();
  const updatedMenus = menus.map((menu) => {
    if (menu.date === updatedMenu.date) {
      return updatedMenu;
    }

    return menu;
  });

  return updatedMenus;
};

export const setMenu = menuDetails => (dispatch, getState) => Menus.setMenu(menuDetails)
  .then((res) => {
    const { menu } = res.data;
    const updatedMenus = getMenusFromStateAndAddNew(menu, getState);

    dispatch(receiveMenus(updatedMenus));
  })
  .catch(requestErrorHandler);

export const getMenus = () => dispatch => Menus.getMenus()
  .then((res) => {
    const { menus, pagination } = res.data;

    dispatch(receiveMenus(menus, pagination));
  })
  .catch(requestErrorHandler);

export const deleteMenu = menuDate => (dispatch, getState) => Menus.deleteMenu(menuDate)
  .then(() => {
    const updatedMenus = getMenusFromStateAndRemoveOne(menuDate, getState);

    dispatch(receiveMenus(updatedMenus));
  })
  .catch(requestErrorHandler);

export const editMenu = menuDetails => (dispatch, getState) => Menus.editMenu(menuDetails)
  .then((res) => {
    const { menu } = res.data;
    const updatedMenus = getMenusFromStateAndReplaceOne(menu, getState);

    dispatch(receiveMenus(updatedMenus));
  })
  .catch(requestErrorHandler);
