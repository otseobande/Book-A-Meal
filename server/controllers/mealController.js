import meals from '../dummy-models/meals';

class MealController {
  static createMeal(req, res) {
    const {
      title,
      description,
      price,
      img
    } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({
        status: false,
        message: 'Parameters supplied incorrectly'
      });
    }

    meals.create({
      userId: 1,
      title,
      description,
      price,
      img
    });

    return res.status(201).json({
      status: true,
      message: 'Meal created successfully'
    });
  }

  static deleteMeal(req, res) {
    const { mealId } = req.params;

    const deleted = meals.delete(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

    if (deleted) {
      return res.status(200).json({
        status: true,
        message: 'Meal deleted successfully'
      });
    }

    return res.status(404).json({
      status: false,
      message: 'Meal not found'
    });
  }

  static getMeal(req, res) {
    const { mealId } = req.params;

    const foundMeal = meals.find(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

    if (!foundMeal) {
      return res.status(404).json({
        status: false,
        message: 'Meal not found'
      });
    }
    return res.status(200).json({
      status: true,
      data: foundMeal
    });
  }

  static getMeals(req, res) {
    return res.status(200).json({
      status: true,
      data: meals.data
    });
  }

  static updateMeal(req, res) {
    const { mealId } = req.params;

    let wrongKeys = false;
    Object.keys(req.body).forEach((key) => {
      if (key !== 'title'
        && key !== 'description'
        && key !== 'price'
        && key !== 'img') {
        wrongKeys = true;
      }
    });

    if (wrongKeys) {
      return res.status(400).json({
        status: false,
        message: 'Wrong parameters supplied'
      });
    }

    const updatedMeal = meals.update(
      req.body,
      meal => parseInt(meal.id, 10) === parseInt(mealId, 10)
    );

    if (Object.keys(updatedMeal).length > 0) {
      return res.status(202).json({
        status: true,
        message: 'Meal updated successfully'
      });
    }

    return res.status(404).json({
      status: false,
      message: 'Meal not found'
    });
  }
}

export default MealController;
