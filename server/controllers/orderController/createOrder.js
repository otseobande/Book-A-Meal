import Orders from '../../dummy-models/orders';

const getAllOrders = (req, res) => {
  const {
    userId,
    mealId,
    quantity,
    deliveryAddress,
  } = req.body;

  Orders.push({
    id: Orders[Orders.length - 1].id + 1,
    userId,
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
