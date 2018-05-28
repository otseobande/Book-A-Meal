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
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  },
  {
    id: 'df12bd22-3326-4929-9cd6-a3805db52ca5',
    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
    title: 'Beef with fries',
    description: 'French fries',
    price: 1200,
    img: 'https://africa-public.food.jumia.com/dynamic/production/ng/images/products/80/80418_1465475724_ma.jpg'
  }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('meals', null, {})
};
