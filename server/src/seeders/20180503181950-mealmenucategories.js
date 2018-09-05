export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('mealMenuCategories', [
    {
      id: '92eb71b5-b659-489c-8556-3ef0f98e9c9c',
      menuCategoryId: '35b44f29-edbb-42f3-a101-4c9b792d6e61',
      mealId: 'dd72bc9b-beb0-49c6-be7b-20106e8aa3d0'
    },
    {
      id: '3e34854f-cb7d-4b68-989a-8eb5e0ca3211',
      menuCategoryId: '36102abb-0f2b-4c35-8a1a-e0c32cf9d921',
      mealId: 'df12bd22-3326-4929-9cd6-a3805db52ca5'
    },
    {
      id: '4cbc7439-c5c6-4a2d-9f85-4b55714af4c0',
      menuCategoryId: '36102abb-0f2b-4c35-8a1a-e0c32cf9d921',
      mealId: 'dd72bc9b-beb0-49c6-be7b-20106e8aa3d0'
    },
    {
      id: '5d9261ab-7a1f-42f1-bf4e-974ac691b1a1',
      menuCategoryId: 'a7166d2c-3af2-438e-ba70-aa02d1a72fb5',
      mealId: 'e0a8e7f2-c27b-484e-9cd7-c4720e14b004'
    },
    {
      id: '7d2c4dd2-263d-44ae-8636-2a873e72e096',
      menuCategoryId: 'c709086c-08f4-49ee-9bfd-6b004aa6ed93',
      mealId: 'e0a8e7f2-c27b-484e-9cd7-c4720e14b004'
    },
    
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('mealMenuCategories', null, {})
};
