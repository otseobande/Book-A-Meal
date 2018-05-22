export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('menuCategories', [
    {
      id: '35b44f29-edbb-42f3-a101-4c9b792d6e61',
      menuId: '635e660b-06aa-4e62-91be-6c3df6c87abe',
      title: 'Dessert'
    },
    {
      id: 'a7166d2c-3af2-438e-ba70-aa02d1a72fb5',
      menuId: 'd48a03fa-ca24-4f5c-9ff2-61c6f5b7b633',
      title: 'Appetizer'
    },
    {
      id: '36102abb-0f2b-4c35-8a1a-e0c32cf9d921',
      menuId: 'cdf0351d-d2c9-4303-a56f-fd33bb437491',
      title: 'Tatalots'
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('menuCategories', null, {})
};
