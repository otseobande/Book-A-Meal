import { meal as Meal } from '../models';

/**
 * @exports
 * @class MealController
 */
class MealController {
  /**
   * Creates a new meal
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static create(req, res, next) {
    const {
      title,
      description,
      price,
      img
    } = req.body;

    return Meal.find({
      where: {
        userId: req.user.id,
        title: req.body.title
      }
    })
      .then((meal) => {
        if (meal) {
          res.status(409).json({
            status: 'error',
            message: 'Meal already exists'
          });
        } else {
          return Meal.create({
            userId: req.user.id,
            title,
            description,
            price,
            img
          });
        }
      })
      .then((newMeal) => {
        if (newMeal) {
          req.app.emit('MealCreated', newMeal);

          res.status(201).json({
            status: 'success',
            message: 'Meal created successfully',
            meal: newMeal
          });
        }
      })
      .catch(next);
  }

  /**
   * Deletes a meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static delete(req, res, next) {
    const { mealId } = req.params;

    return Meal.destroy({
      where: {
        id: mealId,
        userId: req.user.id
      }
    })
      .then((rows) => {
        if (rows > 0) {
          req.app.emit('MealDeleted', req.user.id);

          return res.status(200).json({
            status: 'success',
            message: 'Meal deleted successfully'
          });
        }

        return res.status(404).json({
          status: 'error',
          message: 'Meal not found'
        });
      })
      .catch(next);
  }

  /**
   * Return meal that match mealId
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static getMeal(req, res, next) {
    const { mealId } = req.params;

    return Meal.find({
      where: {
        id: mealId,
        userId: req.user.id
      }
    })
      .then((foundMeal) => {
        if (foundMeal) {
          return res.status(200).json({
            status: 'success',
            meal: foundMeal
          });
        }

        return res.status(404).json({
          status: 'error',
          message: 'Meal not found'
        });
      })
      .catch(next);
  }

  /**
   * Get all meals
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static getMeals(req, res, next) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const offset = limit * (page - 1);

    return Meal.findAndCountAll({
      where: {
        userId: req.user.id
      },
      limit,
      offset
    })
      .then(({ count, rows }) => {
        const pageCount = Math.ceil(count / limit);
        res.status(200).json({
          status: 'success',
          meals: rows,
          pagination: {
            itemCount: count,
            pageCount,
            currentPage: page
          }
        });
      })
      .catch(next);
  }

  /**
   * Update an existing meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static update(req, res, next) {
    const { mealId } = req.params;

    return Meal.find({
      where: {
        id: mealId,
        userId: req.user.id
      }
    })
      .then((foundMeal) => {
        if (foundMeal) {
          return foundMeal.updateAttributes(req.body);
        }
        res.status(404).json({
          status: 'error',
          message: 'Meal not found'
        });
      })
      .then((updatedMeal) => {
        if (updatedMeal) {
          req.app.emit('MealUpdated', updatedMeal);

          return res.status(200).json({
            status: 'success',
            message: 'Meal updated successfully',
            meal: updatedMeal
          });
        }
      })
      .catch(next);
  }
}

export default MealController;
