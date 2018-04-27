import Meals from '../../dummy-models/meals';

const getMeal = (req, res) => {
  const { mealId } = req.params;

  const foundMeal = Meals.find(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

  if (foundMeal) {
    return res.status(200).json({
      status: 'success',
      data: foundMeal,
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'Meal not found',
  });
};

export default getMeal;
