import faker from 'faker';

const menuCategories = Array.apply(null, Array(30)).map(() => ({
  id: faker.random.uuid(),
  menuId: 'cdf0351d-d2c9-4303-a56f-fd33bb437491',
  title: 'Tatalots'
}));

menuCategories.concat([{
  id: '35b44f29-edbb-42f3-a101-4c9b792d6e61',
  menuId: '635e660b-06aa-4e62-91be-6c3df6c87abe',
  title: 'Dessert'
},
{
  id: 'a7166d2c-3af2-438e-ba70-aa02d1a72fb5',
  menuId: 'd48a03fa-ca24-4f5c-9ff2-61c6f5b7b633',
  title: 'Appetizer'
}]);

const mealMenuCategories = menuCategories.map((menuCategory => {
  return ({
    id: faker.random.uuid(),
    menuCategoryId: menuCategory.id,
    mealId: 'dd72bc9b-beb0-49c6-be7b-20106e8aa3d0'
  })
}))

export default {
  up: async (queryInterface, Sequelize) => {
    const insertedMenuCategories = await queryInterface.bulkInsert('menuCategories', menuCategories, {})
    await queryInterface.bulkInsert('mealMenuCategories', mealMenuCategories, {})

    return insertedMenuCategories
  },

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('menuCategories', null, {})
};
