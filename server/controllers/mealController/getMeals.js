import meals from '../../dummy-models/meals';

const getMeals = (req, res) => res.status(200).json({
  status: 'success',
  data: meals.data
});

export default getMeals;
