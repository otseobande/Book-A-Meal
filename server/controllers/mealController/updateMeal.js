import Meals from '../../dummy-models/meals';

const updateMeal = (req, res) => {
  const { mealId } = req.params;
  const {
    title,
    description,
    price,
    img,
  } = req.body;

  if (!title || !description || !price || !img) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameters supplied incorrectly',
    });
  }

  const mealIndex = Meals.findIndex(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

  if (mealIndex > -1) {
    Meals[mealIndex].title = title;
    Meals[mealIndex].description = description;
    Meals[mealIndex].price = price;
    Meals[mealIndex].img = img;

    return res.status(202).json({
      status: 'success',
      message: 'Meal updated successfully',
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'Meal not found',
  });
};

export default updateMeal;
