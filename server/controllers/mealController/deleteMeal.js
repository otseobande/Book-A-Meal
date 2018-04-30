import meals from '../../dummy-models/meals';

const deleteMeal = (req, res) => {
  const { mealId } = req.params;

  const deleted = meals.delete(meal => parseInt(meal.id, 10) === parseInt(mealId, 10));

  if (deleted) {
    return res.status(202).json({
      status: 'success',
      message: 'Meal deleted successfully'
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'Meal not found'
  });
};

export default deleteMeal;
