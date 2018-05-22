import moment from 'moment';
import {
  menu,
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
            message: 'Menu created successfully',
            menu: createdMenu
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
    const { title, categories } = req.body;
    const date = req.body.date || req.params.date || moment();

    return menu.findOne({
      where: {
        date,
        userId: req.user.id
      }
    })
      .then((foundMenu) => {
        if (foundMenu) {
          res.status(409).json({
            status: 'error',
            message: 'You have already set the menu for this day, you can only set one menu per day.',
            menu: foundMenu
          });
        } else {
          return menu.create({
            userId: req.user.id,
            title,
            date,
            categories
          }, {
            include: [{
              model: menuCategory,
              as: 'categories'
            }]
          })
            .then(newMenu => newMenu.getCategories())
            .then((menuCategories) => {
              const setMeals = menuCategories.map((category) => {
                const { meals } = categories
                  .find(reqCategory => reqCategory.title === category.title);

                return category.setMeals(meals);
              });
              return Promise.all(setMeals);
            })
            .then(() => menu.findOne({
              where: {
                date,
                userId: req.user.id
              }
            }));
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

        MenuController.sendNotFoundResponse(res);
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

        return MenuController.sendNotFoundResponse(res);
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

    const givenDate = moment(date);
    const findMenu = menu.find({
      where: {
        date: givenDate,
        userId: req.user.id
      }
    });

    let updateMenu = {};

    if (req.body.categories) {
      updateMenu = findMenu
        .then((foundMenu) => {
          if (foundMenu) {
            return foundMenu.destroy();
          }

          MenuController.sendNotFoundResponse(res);
        })
        .then((rows) => {
          if (rows) {
            return MenuController.createMenuHelper(req, res);
          }
        });
    } else {
      updateMenu = findMenu
        .then((foundMenu) => {
          if (foundMenu) {
            return foundMenu.updateAttributes(req.body);
          }

          MenuController.sendNotFoundResponse(res);
        });
    }

    return updateMenu
      .then((updatedMenu) => {
        if (updatedMenu) {
          return res.status(200).json({
            status: 'success',
            message: 'Menu updated successfully',
            menu: updatedMenu
          });
        }
      })
      .catch(err => next(err));
  }

  /**
   * helper function to send a not found response
   *
   * @param  {object} res - Response object
   * @return {object} res - Response object
   */
  static sendNotFoundResponse(res) {
    return res.status(404).json({
      status: 'error',
      message: 'Menu not set for this day'
    });
  }
}

export default MenuController;
