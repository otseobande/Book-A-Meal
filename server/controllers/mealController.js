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
      status: 'success',
      message: 'Meal created successfully',
    });
  }

  static getMeals(req, res) {
    return res.status(200).json({
      status: 'success',
      data: {
        meals: Meals,
      },
    });
  }

  static updateMeal(req, res) {
    const { mealId } = req.params;
    const {
      title, description, price, img,
    } = req.body;

    if (!title || !description || !price || !img) {
      return res.status(400).json({
        status: 'error',
        message: 'Parameters supplied incorrectly',
      });
    }

    const mealIndex = Meals.findIndex(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

    if (mealIndex > -1) {
      const updatedMeal = Meals[mealIndex];

      updatedMeal.title = title;
      updatedMeal.description = description;
      updatedMeal.price = price;
      updatedMeal.img = img;

      Meals[mealIndex] = updatedMeal;

      return res.status(202).json({
        status: 'success',
        message: 'Meal updated successfully',
      });
    }

    return res.status(404).json({
      status: 'error',
      message: 'Meal not found',
    });
  }

  static deleteMeal(req, res) {
    const { mealId } = req.params;

    const mealIndex = Meals.findIndex(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

    if (mealIndex > -1) {
      Meals.splice(mealIndex, 1);

      return res.status(202).json({
        status: 'success',
        message: 'Meal deleted successfully',
      });
    }

    return res.status(404).json({
      status: 'error',
      message: 'Meal not found',
    });
  }
}

export default MealController;
