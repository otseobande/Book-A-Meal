import orders from '../dummy-models/orders';
import users from '../dummy-models/users';
import meals from '../dummy-models/meals';

class OrderController {
  static createOrder(req, res) {
    const {
      mealId,
      quantity,
      deliveryAddress
    } = req.body;

    orders.create({
      userId: 2,
      mealId,
      quantity,
      deliveryAddress
    });

    return res.status(200).json({
      status: true,
      message: 'Order created successfully'
    });
  }

  static getAllOrders(req, res) {
    const responseData = [];
    orders.data.forEach((order) => {
      const linkedUser = users.find(user => parseInt(user.id, 10) === parseInt(order.userId, 10));
      const linkedMeal = meals.find(meal => parseInt(meal.id, 10) === parseInt(order.mealId, 10));
      responseData.push({
        id: order.id,
        quantity: order.quantity,
        deliveryAddress: order.deliveryAddress,
        user: linkedUser,
        meal: linkedMeal
      });
    });

    return res.status(200).json({
      status: true,
      data: responseData
    });
  }

  static updateOrder(req, res) {
    const { orderId } = req.params;

    const updatedOrder = orders.update(
      req.body,
      order => parseInt(order.id, 10) === parseInt(orderId, 10)
    );

    if (Object.keys(updatedOrder).length > 0) {
      return res.status(202).json({
        status: true,
        message: 'order updated successfully'
      });
    }

    return res.status(404).json({
      status: false,
      message: 'order not found'
    });
  }
}

export default OrderController;
