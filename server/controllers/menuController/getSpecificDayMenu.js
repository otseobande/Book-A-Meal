import Menus from '../../dummy-models/menus';
import Meals from '../../dummy-models/meals';
import MenuCategories from '../../dummy-models/menuCategories';
import MealMenuCategories from '../../dummy-models/mealMenuCategories';

const getSpecificDayMenu = (req, res) => {
  const { date } = req.params;

  const jsDate = new Date(date);

  if (Number.isNaN(jsDate.getTime())) {
    return res.status(400).json({
      status: 'error',
      message: 'Date format should be DD-MM-YYYY',
    });
  }

  const menus = Menus.filter(menu => (new Date(menu.date)).getTime() === jsDate.getTime());

  if (menus.length < 1) {
    return res.status(404).json({
      status: 'error',
      message: 'No Records Found',
    });
  }


  const responseData = [];
  menus.forEach((menu) => {
    const data = {
      id: menu.id,
      title: menu.title,
      date: menu.date,
    };
    const categories = [];
    MenuCategories.forEach((category) => {
      if (parseInt(category.menuId, 10) === parseInt(menu.id, 10)) {
        const categoryData = {
          id: category.menuId,
          title: category.title,
        };

        const meals = [];
        MealMenuCategories.forEach((mealMenu) => {
          Meals.forEach((meal) => {
            if (parseInt(meal.id, 10) === parseInt(mealMenu.mealId, 10) &&
                            parseInt(category.id, 10) === parseInt(mealMenu.menuCategoryId, 10)) {
              meals.push(meal);
            }
          });
        });

        categoryData.meals = meals;
        categories.push(categoryData);
      }
    });
    data.categories = categories;
    responseData.push(data);
  });

  return res.status(200).json({
    status: 'success',
    data: responseData,
  });
};


export default getSpecificDayMenu;
