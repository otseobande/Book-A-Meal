import meals from '../dummy-models/meals';
import { Meal } from '../models';

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
   * @return {json} res.json
   */
  static create(req, res) {
    const {
      title, description, price, img
    } = req.body;
    Meal.create({
      userId: req.user.id,
      title,
      description,
      price,
      img
    }).then((meal) => {
      res.status(201).json({
        status: true,
        message: 'Meal created successfully'
      });
    }).catch((err) => {
      //
    });
  }

  /**
   * Deletes a meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static delete(req, res) {
    const { mealId } = req.params;

    Meal.destroy({
      where:{
        id: mealId
      }
    }).then(() =>{
      return res.status(200).json({
        status: true,
        message: 'Meal deleted successfully'
      });
    }).catch(err => {
      return res.status(500).json({
        status:false,
        error: err.message
      })
    })


    // return res.status(404).json({
    //   status: false,
    //   message: 'Meal not found'
    // });
  }

  /**
   * Return meal that match mealId
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static get(req, res) {
    const { mealId } = req.params;

    Meal.findById(mealId).then(meal => {
      return res.status(200).json({
        status: true,
        data: meal
      });
    }).catch(err => {
      return res.status(404).json({
        status: false,
        message: 'Meal not found'
      });
    });
  }

  /**
   * Get all meals
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getMeals(req, res) {
    Meal.findAll().then(meals => {
      return res.status(200).json({
        status: true,
        data: meals
      });
    }).catch(err => {
      return res.status(500).json({
        status: false,
        message: err.message
      })
    })
  }

  /**
   * Update an existing meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static update(req, res) {
    const { mealId } = req.params;

    Meal.find({
      where: {
        id: mealId
      }
    }).then(meal => {
      meal.updateAttributes({
        ...req.body
      });
    }).then(() => {
      return res.status(202).json({
        status: true,
        message: 'Meal updated successfully'
      });
    }).catch(() => {
      return res.status(404).json({
        status: false,
        message: 'Meal not found'
      });
    })
   
    
  }
}

export default MealController;
