import Orders from '../../dummy-models/orders';
import Users from '../../dummy-models/users';
import Meals from '../../dummy-models/meals';

const getAllOrders = (req, res) => {
  const responseData = [];
  Orders.forEach((order) => {
    const linkedUser = Users.find(user => parseInt(user.id, 10) === parseInt(order.userId, 10));
    const linkedMeal = Meals.find(meal => parseInt(meal.id, 10) === parseInt(order.mealId, 10));
    responseData.push({
      id: order.id,
      quantity: order.quantity,
      deliveryAddress: order.deliveryAddress,
      user: linkedUser,
      meal: linkedMeal,
    });
  });

  return res.status(200).json({
    status: 'success',
    data: responseData,
  });
};

export default getAllOrders;
