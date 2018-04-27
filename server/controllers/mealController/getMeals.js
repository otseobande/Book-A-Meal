import Meals from '../../dummy-models/meals';

const getMeals = (req, res) => res.status(200).json({
  status: 'success',
  data: {
    meals: Meals,
  },
});

export default getMeals;
