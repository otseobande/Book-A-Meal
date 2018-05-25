export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('notifications', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    userId: {
      allowNull: false,
      type: Sequelize.UUID
    },
    info: {
      allowNull: false,
      type: Sequelize.STRING
    },
    isRead: {
      defaultValue: false,
      allowNull: false,
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn('now')
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('notifications')
};
