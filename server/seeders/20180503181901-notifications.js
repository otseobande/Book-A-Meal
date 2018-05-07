export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notifications', [
    {
      userId: 22,
      info: 'New meal',
      isRead: true
    },
    {
      userId: 22,
      info: 'Welcome',
      isRead: false
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notifications', null, {})
};
