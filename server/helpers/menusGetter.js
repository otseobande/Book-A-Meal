import menus from '../dummy-models/menus';
import meals from '../dummy-models/meals';
import menuCategories from '../dummy-models/menuCategories';
import mealMenuCategories from '../dummy-models/mealMenuCategories';

const menusGetter = (callback) => {
  const foundMenus = [];
  menus.data.forEach((menu) => {
    if (callback(menu)) {
      const data = {
        id: menu.id,
        title: menu.title,
        date: menu.date
      };
      const categories = [];
      menuCategories.data.forEach((category) => {
        if (parseInt(category.menuId, 10) === parseInt(menu.id, 10)) {
          const categoryData = {
            id: category.menuId,
            title: category.title
          };
          const matchingMeals = [];
          mealMenuCategories.data.forEach((mealmenu) => {
            meals.data.forEach((meal) => {
              if (parseInt(meal.id, 10) === parseInt(mealmenu.mealId, 10)
                && parseInt(category.id, 10) === parseInt(mealmenu.menuCategoryId, 10)) {
                matchingMeals.push(meal);
              }
            });
          });

          categoryData.meals = matchingMeals;
          categories.push(categoryData);
        }
      });
      data.categories = categories;
      foundMenus.push(data);
    }
  });

  return foundMenus;
};

export default menusGetter;
