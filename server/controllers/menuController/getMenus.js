import menus from '../../dummy-models/menus';
import meals from '../../dummy-models/meals';
import menuCategories from '../../dummy-models/menuCategories';
import mealMenuCategories from '../../dummy-models/mealMenuCategories';

const getMenus = (req, res) => {
  const responseData = [];
  menus.data.forEach((menu) => {
    const data = {
      id: menu.id,
      title: menu.title,
      date: menu.date,
    };
    const categories = [];
    menuCategories.data.forEach((category) => {
      if (parseInt(category.menuId, 10) === parseInt(menu.id, 10)) {
        const categoryData = {
          id: category.menuId,
          title: category.title,
        };

        const concatMeals = [];
        mealMenuCategories.data.forEach((mealMenu) => {
          meals.data.forEach((meal) => {
            if (parseInt(meal.id, 10) === parseInt(mealMenu.mealId, 10) &&
                            parseInt(category.id, 10) === parseInt(mealMenu.menuCategoryId, 10)) {
              concatMeals.push(meal);
            }
          });
        });

        categoryData.meals = concatMeals;
        categories.push(categoryData);
      }
    });
    data.categories = categories;
    responseData.push(data);
  });

  res.status(200).json({
    status: 'success',
    data: responseData,
  });
};

export default getMenus;
