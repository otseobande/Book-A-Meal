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
    Meal.create({
      userId: req.user.id,
      ...req.body
    }).then(() => {
      res.status(201).json({
        status: true,
        message: 'Meal created successfully'
      });
    }).catch((err) => {
      next(err);
    });
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

    Meal.destroy({
      where: {
        id: mealId,
        userId: req.user.id
      }
    }).then((rows) => {
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
    }).catch((err) => {
      next(err);
    });
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

    Meal.find({
      where: {
        id: mealId,
        userId: req.user.id
      }
    }).then((meal) => {
      if (meal) {
        return res.status(200).json({
          status: true,
          data: meal
        });
      }

      return res.status(404).json({
        status: false,
        message: 'Meal not found'
      });
    }).catch((err) => {
      next(err);
    });
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
    Meal.findAll({
      where: {
        userId: req.user.id
      }
    }).then(meals => res.status(200).json({
      status: true,
      data: meals
    })).catch((err) => {
      next(err);
    });
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

    Meal.find({
      where: {
        id: mealId,
        userId: req.user.id
      }
    }).then((meal) => {
      if (meal) {
        meal.updateAttributes(req.body);

        return res.status(202).json({
          status: true,
          message: 'Meal updated successfully'
        });
      }
      return res.status(404).json({
        status: false,
        message: 'Meal not found'
      });
    }).catch((err) => {
      next(err);
    });
  }
}

export default MealController;
