export default {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('notifications', [
    {
      id: 'f0f6ea4d-da4d-414d-9294-dc2d306d8492',
      userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
      info: 'New meal',
      isRead: true
    },
    {
      id: '3b7c1acd-55e4-464f-9d61-e81a1f492efa',
      userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
      info: 'Welcome',
      isRead: false
    }
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('notifications', null, {})
};
