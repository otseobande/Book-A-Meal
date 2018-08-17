export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('menus', {
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
    date: {
      allowNull: false,
      type: Sequelize.DATEONLY
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('menus')
};
