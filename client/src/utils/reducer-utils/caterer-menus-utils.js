export const addMenu = (state, payload) => {
  const { menu } = payload;
  const updatedMenus = [menu, ...state.menus];

  return {
    ...state, menus: updatedMenus
  };
};

export const removeMenu = (state, payload) => {
  const { menu } = payload;

  const updatedMenus = state.menus.filter(m => m.date !== menu.date);

  return {
    ...state,
    menus: updatedMenus
  };
};

export const editMenu = (state, payload) => {
  const { menus } = state;
  const { menu } = payload;

  const updatedMenus = menus.map((m) => {
    if (m.date === menu.date) {
      return menu;
    }
    return m;
  });

  return {
    ...state,
    menus: updatedMenus
  };
};
