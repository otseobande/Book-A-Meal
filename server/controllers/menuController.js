import menus from '../dummy-models/menus';
import meals from '../dummy-models/meals';
import menuCategories from '../dummy-models/menuCategories';
import mealMenuCategories from '../dummy-models/mealMenuCategories';

class MenuController {
  static createMenu(req, res) {
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
  }

  static deleteMenu(req, res) {
    const { date } = req.params;

    const deleted = menus.delete(menu => (new Date(date)).getTime()
                                === (new Date(menu.date)).getTime());

    if (deleted) {
      return res.status(200).json({
        status: 'success',
        message: 'menu deleted successfully'
      });
    }

    return res.status(404).json({
      status: 'error',
      message: 'menu not found'
    });
  }

  static getMenus(req, res) {
    const responseData = [];
    menus.data.forEach((menu) => {
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
      data: responseData
    });
  }

  static getSpecificDayMenu(req, res) {
    const { date } = req.params;

    const jsDate = new Date(date);

    if (Number.isNaN(jsDate.getTime())) {
      return res.status(400).json({
        status: 'error',
        message: 'Date format should be DD-MM-YYYY'
      });
    }

    const foundMenu = menus.find(menu => (new Date(menu.date)).getTime() === jsDate.getTime());

    if (!foundMenu) {
      return res.status(404).json({
        status: 'error',
        message: 'No Records Found'
      });
    }


    const responseData = [];
    menus.data.forEach((menu) => {
      if ((new Date(menu.date)).getTime() === jsDate.getTime()) {
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
        responseData.push(data);
      }
    });

    return res.status(200).json({
      status: 'success',
      data: responseData
    });
  }

  static getTodaysMenu(req, res) {
    const responseData = [];
    menus.data.some((menu) => {
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

          const concatMeals = [];
          mealMenuCategories.data.forEach((mealMenu) => {
            meals.data.forEach((meal) => {
              if (parseInt(meal.id, 10) === parseInt(mealMenu.mealId, 10) &&
                              parseInt(category.id, 10) === parseInt(mealMenu.menuCategoryId, 10)) {
                concatMeals.push(meal);
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
      data: responseData
    });
  }

  static updateMenu(req, res) {
    const { date } = req.params;
    const { title, categories } = req.body;

    if (!title || !categories) {
      return res.status(400).json({
        status: 'error',
        message: 'Parameters supplied incorrectly'
      });
    }

    const menu = menus.update(
      { title, date },
      m => (new Date(m.date)).getTime() === (new Date(date)).getTime()
    );

    menuCategories.delete(menuCategory => menuCategory.menuId === menu.id);

    categories.forEach((category) => {
      menuCategories.delete(mc => mc.menuId === menu.id);
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

    if (Object.keys(menu).length > 0) {
      return res.status(202).json({
        status: 'success',
        message: 'Menu updated successfully'
      });
    }

    return res.status(404).json({
      status: 'error',
      message: 'Menu not found'
    });
  }
}

export default MenuController;
