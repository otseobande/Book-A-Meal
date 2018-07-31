export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('meals', [{
    id: '64c45c00-ed18-44b7-862a-f12d0481696c',
    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
    title: 'Rice and stew',
    description: 'Nigerian rice and stew',
    price: 300,
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  },
  {
    id: 'dd72bc9b-beb0-49c6-be7b-20106e8aa3d0',
    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
    title: 'Beef with rice',
    description: 'Fried rice and beef',
    price: 500,
    img: 'https://qph.ec.quoracdn.net/main-qimg-114f40fc7ad4f623ac45ebb33e2c1f8d'
  },
  {
    id: 'df12bd22-3326-4929-9cd6-a3805db52ca5',
    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
    title: 'Beef with fries',
    description: 'French fries',
    price: 1200,
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  },
  {
    id: 'e0a8e7f2-c27b-484e-9cd7-c4720e14b004',
    title: 'Rice and stew',
    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
    description: 'Delicious Nigerian rice and Chicken Stew with Onions, Tomatoes, and Dijon Recipe',
    price: 1200,
    img: 'https://www.simplyrecipes.com/wp-content/uploads/2009/04/chicken-stew-onions-tomatoes-dijon-horiz-a-1600.jpg'
  }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('meals', null, {})
};
