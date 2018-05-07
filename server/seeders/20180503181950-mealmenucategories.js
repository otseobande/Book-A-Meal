export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('mealMenuCategories', [
    {
      menuCategoryId: 1,
      mealId: 2
    },
    {
      menuCategoryId: 2,
      mealId: 3
    },
    {
      menuCategoryId: 2,
      mealId: 1
    },
    {
      menuCategoryId: 3,
      mealId: 1
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('mealMenuCategories', null, {})
};
