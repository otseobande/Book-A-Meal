import menus from '../../dummy-models/menus';
import meals from '../../dummy-models/meals';
import menuCategories from '../../dummy-models/menuCategories';
import mealMenuCategories from '../../dummy-models/mealmenuCategories';

const updateMenu = (req, res) => {
  const { date } = req.params;
  const { title, categories } = req.body;

  if (!title || !categories) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameters supplied incorrectly',
    });
  }

  const menu = menus.update({title, date}, 
                 m => (new Date(m.date)).getTime() === (new Date(date)).getTime());

  const menuCategory = menuCategories.delete(menuCategory => menuCategory.menuId === menu.id);

  categories.forEach((category) => {
    menuCategories.delete((mc) => mc.menuId === menu.id);
    const mc = menuCategories.create({
      mealId: menu.id,
      title: category.title,
    });

    category.mealIds.forEach((mealId) => {
      const mmc = mealMenuCategories.create({
        menuCategoryId: menuCategories.data[menuCategories.data.length - 1].id + 1,
        mealId,
      });
    });
  });

  if(Object.keys(menu).length > 0){
    res.status(202).json({
      status: 'success',
      message: 'Menu updated successfully',
    });
  }

  res.status(404).json({
    status: 'error',
    message: 'Menu not found',
  });
}

export default updateMenu;
