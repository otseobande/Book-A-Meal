import faker from 'faker';

let menuCategories = [{
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
  id: 'c709086c-08f4-49ee-9bfd-6b004aa6ed93',
  menuId: 'aca43e8e-3315-451f-a523-1318f003463e',
  title: 'Dessert'
},
{
  id: 'ffd61b69-d030-4c12-b72b-7a737f14b719',
  menuId: '6575acfd-1ed9-4ee0-a60e-1395c47868c5',
  title: 'Appetizer'
}];

menuCategories = menuCategories.concat(Array.apply(null, Array(30)).map(() => ({
  id: faker.random.uuid(),
  menuId: 'cdf0351d-d2c9-4303-a56f-fd33bb437491',
  title: 'Tatalots'
})));

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
