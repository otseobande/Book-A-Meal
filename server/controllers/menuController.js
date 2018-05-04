import menus from '../dummy-models/menus';
import menuCategories from '../dummy-models/menuCategories';
import mealMenuCategories from '../dummy-models/mealMenuCategories';
import menusGetter from '../helpers/menusGetter';
import { 
  Menu,
  MenuCategory,
  MealMenuCategory 
} from '../models';

/**
 * @exports
 * @class MenuController
 */
class MenuController {
  /**
   * Creates a new menu
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static createMenu(req, res) {
    const { title, date, categories } = req.body;

    Menu.create({
      userId: req.user.id,
      title,
      date
    }).then(meal => {
      categories.forEach((category) =>{
        MenuCategory.create({
          mealId: menu.id,
          title: category.title
        }).then(menuCategory =>{
          category.mealIds.forEach(mealId =>{
            Meal.find({
              where:{
                id: mealId,
              }
            }).then(meal => {
              menuCategory.addMeal(meal);
            })
            
          })
        })
      })
    });

    // categories.forEach((category) => {
    //   menuCategories.create({
    //     mealId: menu.id,
    //     title: category.title
    //   });
    //   category.mealIds.forEach((mealId) => {
    //     mealMenuCategories.create({
    //       menuCategoryId: menuCategories.data[menuCategories.data.length - 1].id + 1,
    //       mealId
    //     });
    //   });
    // });
  }


  /**
   * Deletes a menu
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static deleteMenu(req, res) {
    const { date } = req.params;

    const deleted = menus.delete(menu => (new Date(date)).getTime()
                                === (new Date(menu.date)).getTime());

    if (deleted) {
      return res.status(200).json({
        status: true,
        message: 'menu deleted successfully'
      });
    }

    return res.status(404).json({
      status: false,
      message: 'menu not found'
    });
  }

  /**
   * Gets all menus
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getMenus(req, res) {
    const responseData = menusGetter(() => true);

    res.status(200).json({
      status: true,
      data: responseData
    });
  }

  /**
   * Gets the menu for the date specified in
   * the date param
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getSpecificDayMenu(req, res) {
    const { date } = req.params;

    const givenDate = new Date(date);


    const foundMenu = menus.find(menu => (new Date(menu.date)).getTime() === givenDate.getTime());

    if (!foundMenu) {
      return res.status(404).json({
        status: false,
        message: 'No Records Found'
      });
    }


    const responseData = menusGetter(menu =>
      (new Date(menu.date)).getTime() === givenDate.getTime());

    return res.status(200).json({
      status: true,
      data: responseData
    });
  }

  /**
   * Gets today's menu
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getTodaysMenu(req, res) {
    const responseData = menusGetter(menu =>
      (new Date(menu.date)).getTime() === (new Date()).getTime());

    return res.status(200).json({
      status: true,
      data: responseData
    });
  }

  /**
   * Updates an exising menu
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static updateMenu(req, res) {
    const { date } = req.params;
    const { title, categories } = req.body;

    const menu = menus.update(
      { title, date },
      m => (new Date(m.date)).getTime() === (new Date(date)).getTime()
    );

    menuCategories.delete(menuCategory => menuCategory.menuId === menu.id);

    if (categories && categories.length > 0) {
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
    }

    if (Object.keys(menu).length > 0) {
      return res.status(202).json({
        status: true,
        message: 'Menu updated successfully'
      });
    }

    return res.status(404).json({
      status: false,
      message: 'Menu not found'
    });
  }
}

export default MenuController;
