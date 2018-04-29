import orders from '../../dummy-models/orders';
import users from '../../dummy-models/users';
import meals from '../../dummy-models/meals';

const getAllorders = (req, res) => {
  const responseData = [];
  orders.data.forEach((order) => {
    const linkedUser = users.find(user => parseInt(user.id, 10) === parseInt(order.userId, 10));
    const linkedMeal = meals.find(meal => parseInt(meal.id, 10) === parseInt(order.mealId, 10));
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

export default getAllorders;
