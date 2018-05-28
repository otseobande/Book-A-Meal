export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    fullName: {
      allowNull: false,
      type: Sequelize.STRING
    },
    username: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true
    },
    email: {
      allowNull: false,
      type: Sequelize.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING
    },
    role: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: ['customer', 'caterer', 'admin']
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
