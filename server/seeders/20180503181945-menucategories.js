export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('menuCategories', [
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
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('menuCategories', null, {})
};
