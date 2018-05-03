export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [
      {
        userId: 2,
        info: 'New meal',
        isRead: true
      },
      {
        userId: 1,
        info: 'Welcome',
        isRead: false
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notifications', null, {});
  }
};
