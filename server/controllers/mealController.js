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
    return Meal.find({
      where: {
        userId: req.user.id,
        title: req.body.title
      }
    })
      .then((meal) => {
        if (meal) {
          return res.status(409).json({
            status: false,
            message: 'Meal already exists'
          });
        }
        return Meal.create({
          userId: req.user.id,
          ...req.body
        }).then((newMeal) => {
          if (newMeal) {
            return res.status(201).json({
              status: true,
              message: 'Meal created successfully',
              meal: newMeal
            });
          }
        });
      })
      .catch(err => next(err));
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
          return res.status(200).json({
            status: true,
            message: 'Meal deleted successfully'
          });
        }

        return res.status(404).json({
          status: false,
          message: 'Meal not found'
        });
      })
      .catch(err => next(err));
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
  static get(req, res, next) {
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
            status: true,
            meal: foundMeal
          });
        }

        return res.status(404).json({
          status: false,
          message: 'Meal not found'
        });
      })
      .catch(err => next(err));
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
    return Meal.findAll({
      where: {
        userId: req.user.id
      }
    })
      .then(meals => res.status(200).json({
        status: true,
        meals
      }))
      .catch(err => next(err));
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
    .then(foundMeal => {
      if (foundMeal) {
        return foundMeal.updateAttributes(req.body)
      } else {
        res.status(404).json({
          status: 'error',
          message: 'Meal not found'
        });
      }
    })
      .then(updatedMeal => {
        if (updatedMeal) {
          return res.status(200).json({
            status: 'success',
            message: 'Meal updated successfully',
            meal: updatedMeal
          });
        }
      })
      .catch(err => next(err));
  }
}

export default MealController;
