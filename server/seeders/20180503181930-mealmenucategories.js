export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MealMenuCategories', [
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
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MealMenuCategories', null, {});
  }
};
