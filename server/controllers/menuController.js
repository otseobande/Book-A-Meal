import Controller from './controller';
import Menus from '../dummy-models/menus';
import Meals from '../dummy-models/meals';
import MenuCategories from '../dummy-models/menuCategories';
import MealMenuCategories from '../dummy-models/mealMenuCategories';

class MenuController extends Controller {
  static createMenu(req, res) {
    const { title, date, categories } = req.body;

    if (!title || !date || !categories) {
      return res.status(400).json({
        status: 'error',
        message: 'Parameters supplied incorrectly',
      });
    }

    Menus.push({
      id: Menus[Menus.length - 1].id + 1,
      userId: 2,
      title,
      date,
    });

    categories.forEach((category) => {
      MenuCategories.push({
        id: MenuCategories[MenuCategories.length - 1].id + 1,
        mealId: Menus[Menus.length - 1].id,
        title: category.title,
      });
      category.mealIds.forEach((mealId) => {
        MealMenuCategories.push({
          id: MealMenuCategories[MealMenuCategories.length - 1].id + 1,
          menuCategoryId: MenuCategories[MenuCategories.length - 1].id + 1,
          mealId,
        });
      });
    });


    return res.status(201).json({
      status: 'success',
      message: 'Menu created successfully',
    });
  }

  static getMenus(req, res) {
    const responseData = [];
    Menus.forEach((menu) => {
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

    res.status(200).json({
      status: 'success',
      data: responseData,
    });
  }

  static getTodaysMenu(req, res) {
    const responseData = [];
    Menus.some((menu) => {
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
      return parseInt(menu.id, 10) === 1;
    });

    res.status(200).json({
      status: 'success',
      data: responseData,
    });
  }

  static getSpecificDayMenu(req, res) {
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

    return res.status(200).json({
      status: 'success',
      data: menus,
    });
  }
}

export default MenuController;
