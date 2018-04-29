import orders from '../../dummy-models/orders';

const getAllOrders = (req, res) => {
  const {
    mealId,
    quantity,
    deliveryAddress,
  } = req.body;

  if (!mealId || !quantity || !deliveryAddress) {
    return res.status(400).json({
      status: 'error',
      message: 'Parameters supplied incorrectly',
    });
  }

  orders.create({
    userId: 2,
    mealId,
    quantity,
    deliveryAddress,
  });

  return res.status(200).json({
    status: 'success',
    message: 'Order created successfully',
  });
};

export default getAllOrders;
