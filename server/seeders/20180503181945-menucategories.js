export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MenuCategories', [
      {
        id: 1,
        menuId: 2,
        title: 'Dessert'
      },
      {
        id: 2,
        menuId: 1,
        title: 'Appetizer'
      },
      {
        id: 3,
        menuId: 3,
        title: 'Tatalots'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MenuCategories', null, {});
  }
};
