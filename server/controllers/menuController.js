import moment from 'moment';
import {
  menu,
  meal,
  menuCategory
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
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static createMenu(req, res, next) {
    return MenuController.createMenuHelper(req, res)
      .then((createdMenu) => {
        if (createdMenu) {
          res.status(201).json({
            status: 'success',
            message: 'Menu created successfully'
          });
        }
      })
      .catch(err => next(err));
  }

  /**
   * Abstracts the menu creation
   * @param  {object}   req - Request Object
   * @param  {object}   res - Response Object
   * @return {Promise} Promise for extending operation
   */
  static createMenuHelper(req, res) {
    const { title, date, categories } = req.body;

    return menu.findOne({
      where: {
        date
      }
    })
      .then((foundMenu) => {
        if (foundMenu) {
          res.status(409).json({
            status: 'error',
            message: 'You have already set the menu for this day, you can only set one menu per day.'
          });
        } else {
          return menu.create({
            userId: req.user.id,
            title,
            date: date || moment()
          });
        }
      })
      .then((createdMenu) => {
        let createCategoryPromises = [];
        if (createdMenu && categories) {
          createCategoryPromises = categories.map(category => menuCategory.create({
            menuId: createdMenu.id,
            title: category.title,
            meals: category.mealId
          })
            .then(createdMenuCategory =>
              createdMenuCategory.setMeals(category.mealIds)));
        }
        return createCategoryPromises;
      })
      .then((createCategoryPromises) => {
        if (createCategoryPromises.length > 0) {
          return Promise.all(createCategoryPromises);
        }
      });
  }

  /**
   * Deletes a menu
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static deleteMenu(req, res, next) {
    const { date } = req.params;

    const givenDate = moment(date);

    return menu.destroy({
      where: {
        date: givenDate,
        userId: req.user.id
      }
    })
      .then((rows) => {
        if (rows > 0) {
          return res.status(200).json({
            status: 'success',
            message: 'menu deleted successfully'
          });
        }

        return res.status(404).json({
          status: 'error',
          message: 'Menu not set for this day'
        });
      })
      .catch(err => next(err));
  }

  /**
   * Gets the menu for the date specified in
   * the date param
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static getSpecificDayMenu(req, res, next) {
    const { date } = req.params;

    const givenDate = date
      ? moment(date)
      : moment();

    return menu.find({
      where: {
        date: givenDate
      }
    })
      .then((foundMenu) => {
        if (foundMenu) {
          return res.status(200).json({
            status: 'success',
            menu: foundMenu
          });
        }

        return res.status(404).json(({
          status: 'error',
          message: 'Menu not set for this day'
        }));
      })
      .catch(err => next(err));
  }


  /**
   * Updates an exising menu
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static updateMenu(req, res, next) {
    const { date } = req.params;
    req.date = date;
    const givenDate = moment(date);
    const findMenu = menu.find({
      where: {
        date: givenDate,
        userId: req.user.id
      }
    });

    if (!req.body.categories) {
      return findMenu
        .then((foundMenu) => {
          if (foundMenu) {
            foundMenu.updateAttributes(req.body);
            return res.status(200).json({
              status: 'success',
              message: 'Menu updated successfully'
            });
          }

          res.status(404).json({
            status: 'error',
            message: 'Menu not set for this day'
          });
        })
        .catch(err => next(err));
    }
    return findMenu
      .then((foundMenu) => {
        if (foundMenu) {
          return foundMenu.destroy();
        }

        res.status(404).json({
          status: 'error',
          message: 'Menu not set for this day'
        });
      })
      .then((rows) => {
        if (rows) {
          return MenuController.createMenuHelper(req, res);
        }
      })
      .then((menuCreated) => {
        if (menuCreated) {
          return res.status(200).json({
            status: 'success',
            message: 'Menu updated successfully'
          });
        }
      })
      .catch(err => next(err));
  }
}

export default MenuController;
