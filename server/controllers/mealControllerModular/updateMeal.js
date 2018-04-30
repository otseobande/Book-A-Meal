import meals from '../../dummy-models/meals';

const updateMeal = (req, res) => {
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
      status: 'error',
      message: 'Wrong parameters supplied'
    });
  }

  const updatedMeal = meals.update(
    req.body,
    meal => parseInt(meal.id, 10) === parseInt(mealId, 10)
  );

  if (Object.keys(updatedMeal).length > 0) {
    return res.status(202).json({
      status: 'success',
      message: 'Meal updated successfully'
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'Meal not found'
  });
};

export default updateMeal;
