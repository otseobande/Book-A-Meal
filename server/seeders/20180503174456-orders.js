export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        userId: 2,
        mealId: 1,
        quantity: 1,
        status: 'pending',
        deliveryAddress: 'bajiki close'
      },
      {
        userId: 2,
        mealId: 1,
        quantity: 1,
        status: 'delivered',
        deliveryAddress: 'bajiki close'
      },
      {
        userId: 2,
        mealId: 1,
        quantity: 1,
        status: 'pending',
        deliveryAddress: 'Irepodun street'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
