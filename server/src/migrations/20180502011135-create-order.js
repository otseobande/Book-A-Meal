export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orders', {
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
    mealId: {
      allowNull: false,
      type: Sequelize.UUID
    },
    quantity: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 1
    },
    phoneNumber: {
      allowNull: false,
      type: Sequelize.STRING
    },
    price: {
      allowNull: false,
      type: Sequelize.FLOAT
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM,
      values: ['pending', 'delivered', 'cancelled']
    },
    deliveryAddress: {
      allowNull: false,
      type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('orders')
};
