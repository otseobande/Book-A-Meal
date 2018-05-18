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
      .then(createdMenu => {
        if(createdMenu){
          res.status(201).json({
            status: 'success',
            message: 'Menu created successfully'
          })
        }
      })
      .catch(err => next(err));
  }

  /**
   * Abstracts the menu creation
   * @param  {object}   data [description]
   * @param  {object}   user [description]
   * @param  {Function} next [description]
   * @return {Promise} Promise for extending operation
   */
  static createMenuHelper(req, res) {
    const { title, date, categories } = req.body;
    const specifiedDate = date ? moment(date) : req.params.date;

    return menu.findOne({
        where: {
          date: specifiedDate
        }
      })
      .then(foundMenu => {
        if(foundMenu){
          res.status(409).json({
            status: 'error',
            message: 'You have already set the menu for this day, you can only set one menu per day.'
          })
        } else {
          return menu.create({
            userId: req.user.id,
            title,
            date: specifiedDate || moment()
          })
        }
        
      })
      .then(createdMenu => {
        if(createdMenu && categories){
          return categories.map(category => menuCategory.create({
              menuId: createdMenu.id,
              title: category.title,
              meals: category.mealId
            })
            .then(createdMenuCategory =>
                createdMenuCategory.setMeals(category.mealIds))  
          );
        }
        return [];
      })
      .then(createCategoryPromises => {
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
          message: 'menu not found'
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
        },
        include: [{
          model: menuCategory,
          include: [{
            model: meal,
            through: {
              attributes: []
            },
          }]
        }]
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
          message: 'Menu not yet set for this day'
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
    req.date = date
    const givenDate = moment(date);

    if (!req.body.categories){
      return menu.update(
      { 
        title: req.body.title 
      },
      {
        where: {
          date: givenDate,
          userId: req.user.id
        }
      })
      .then(updatedMenu => {
        if(updatedMenu){
          return res.status(200).json({
            status: 'success',
            message: 'Menu updated successfully'
          })
        }

        res.status(404).json({
          status: 'error',
          message: 'Menu not found'
        });
      })
      .catch(err => next(err))
    } else {
      return menu.destroy({
        where: {
          date: givenDate,
          userId: req.user.id
        }
      })
      .then((rows) => {
        if (rows > 0) {
          return MenuController.createMenuHelper(req,res);
        } else {
          res.status(404).json({
            status: 'error',
            message: 'Menu not found'
          });
        }
      })
      .then(menuCreated => {
        if(menuCreated){
          res.status(200).json({
            status: 'success',
            message: 'Menu updated successfully'
          })
        }
      })
      .catch(err => next(err));
    }

   
  }
}

export default MenuController;
