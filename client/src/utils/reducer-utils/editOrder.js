const editOrder = (state, payload) => {
  const { order: updatedOrder } = payload;

  const updatedOrders = state.orders.map((order) => {
    if (order.id === updatedOrder.id) {
      return updatedOrder;
    }
    return order;
  });

  return {
    ...state,
    orders: updatedOrders
  };
};

export default editOrder;

