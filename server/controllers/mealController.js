import Controller from './controller';
import Meals from '../dummy-models/meals';

class MealController extends Controller {
  static createMeal(req, res) {
    const {
      title,
      description,
      price,
      img,
    } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({
        status: 'error',
        message: 'Parameters supplied incorrectly',
      });
    }

    Meals.push({
      id: Meals[Meals.length - 1].id + 1,
      title,
      description,
      price,
      img,
    });

    return res.status(201).json({
      message: 'Meal created successfully',
    });
  }

  static getMeals(req, res) {
    return res.status(200).json(Meals);
  }
}

export default MealController;
