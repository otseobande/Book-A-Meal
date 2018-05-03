export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Menus', [
      {
        userId: 2,
        title: 'Italian cuisine',
        date: '05-22-2018'
      },
      {
        userId: 2,
        title: 'Chinese menu',
        date: '05-21-2018'
      },
      {
        userId: 2,
        title: 'Nigerian menu',
        date: '05-24-2018'
      },
      {
        userId: 2,
        title: 'cameroon menu',
        date: '06-24-2018'
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
