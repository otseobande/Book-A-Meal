import moment from 'moment';
import {
  menu,
  meal,
  menuCategory
} from '../models';

const includeJoin = {
  include: [{
    model: menuCategory,
    include: [{
      model: meal,
      through: {
        attributes: []
      }
    }]
  }]
};
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
    MenuController.createMenuHelper(req.body, req.user, next)
      .then(() => res.status(201).json({
        status: true,
        message: 'Menu created successfully'
      })).catch((err) => {
        next(err);
      });
  }

  /**
   * Abstracts the menu creation
   * @param  {object}   data [description]
   * @param  {object}   user [description]
   * @param  {Function} next [description]
   * @return {Promise} Promise for extending operation
   */
  static createMenuHelper(data, user, next) {
    const { title, date, categories } = data;
    return menu.create({
      userId: user.id,
      title,
      date
    }).then((m) => {
      if (categories) {
        categories.forEach((category) => {
          menuCategory.create({
            menuId: m.id,
            title: category.title,
            meals: category.mealId
          }).then((mc) => {
            mc.addMeal(category.mealIds);
          }).catch(err => next(err));
        });
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

    menu.destroy({
      where: {
        date: givenDate,
        userId: req.user.id
      }
    }).then((rows) => {
      if (rows > 0) {
        return res.status(200).json({
          status: true,
          message: 'menu deleted successfully'
        });
      }

      return res.status(404).json({
        status: false,
        message: 'menu not found'
      });
    }).catch(err => next(err));
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
    menu.findAll(includeJoin).then((m) => {
      res.status(200).json({
        status: true,
        data: m
      });
    });
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
    menu.find({
      where: {
        date: givenDate
      },
      ...includeJoin
    }).then((m) => {
      if (m) {
        return res.status(200).json({
          status: true,
          data: m
        });
      }

      return res.status(404).json({
        status: false,
        message: 'No Records Found'
      });
    }).catch(err => next(err));
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

    menu.destroy({
      where: {
        date: givenDate,
        userId: req.user.id
      }
    }).then((rows) => {
      if (rows > 0) {
        return MenuController.createMenuHelper({ date, ...req.body }, req.user, next);
      }

      return res.status(404).json({
        status: false,
        message: 'Menu not found'
      });
    }).then(() => res.status(202).json({
      status: true,
      message: 'Menu updated successfully'
    })).catch(err => next(err));
  }
}

export default MenuController;
