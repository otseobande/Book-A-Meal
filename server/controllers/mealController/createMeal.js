import meals from '../../dummy-models/meals';

const createMeal = (req, res) => {
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

  meals.create({
    userId: 1,
    title,
    description,
    price,
    img,
  });

  return res.status(201).json({
    status: 'success',
    message: 'Meal created successfully',
  });
};

export default createMeal;
