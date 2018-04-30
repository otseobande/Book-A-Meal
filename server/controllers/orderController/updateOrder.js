import orders from '../../dummy-models/orders';

const updateOrder = (req, res) => {
  const { orderId } = req.params;

  const updatedOrder = orders.update(
    req.body,
    order => parseInt(order.id, 10) === parseInt(orderId, 10)
  );

  if (Object.keys(updatedOrder).length > 0) {
    return res.status(202).json({
      status: 'success',
      message: 'order updated successfully'
    });
  }

  return res.status(404).json({
    status: 'error',
    message: 'order not found'
  });
};

export default updateOrder;
