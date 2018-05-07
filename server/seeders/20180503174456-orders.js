export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('orders', [
    {
      userId: 22,
      mealId: 1,
      quantity: 1,
      status: 'pending',
      deliveryAddress: 'bajiki close'
    },
    {
      userId: 22,
      mealId: 1,
      quantity: 1,
      status: 'delivered',
      deliveryAddress: 'bajiki close'
    },
    {
      userId: 22,
      mealId: 1,
      quantity: 1,
      status: 'pending',
      deliveryAddress: 'Irepodun street'
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('orders', null, {})
};
