import menus from '../../dummy-models/menus';
import menuCategories from '../../dummy-models/menuCategories';
import mealMenuCategories from '../../dummy-models/mealMenuCategories';

const createMenu = (req, res) => {
  const { title, date, categories } = req.body;

  if (!title || !date || !categories) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameters supplied incorrectly'
    });
  }

  const menu = menus.create({
    userId: 2,
    title,
    date
  });

  categories.forEach((category) => {
    menuCategories.create({
      mealId: menu.id,
      title: category.title
    });
    category.mealIds.forEach((mealId) => {
      mealMenuCategories.create({
        menuCategoryId: menuCategories.data[menuCategories.data.length - 1].id + 1,
        mealId
      });
    });
  });


  return res.status(201).json({
    status: 'success',
    message: 'Menu created successfully'
  });
};

export default createMenu;
