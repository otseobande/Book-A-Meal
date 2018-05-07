import moment from 'moment';

export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('menus', [
    {
      userId: 22,
      title: 'Italian cuisine',
      date: '2018-06-24'
    },
    {
      userId: 22,
      title: 'Chinese menu',
      date: '2018-06-25'
    },
    {
      userId: 22,
      title: 'Nigerian menu',
      date: '2018-06-26'
    },
    {
      userId: 22,
      title: 'cameroon menu',
      date: moment().format('YYYY-MM-DD')
    }

  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('menus', null, {})
};
