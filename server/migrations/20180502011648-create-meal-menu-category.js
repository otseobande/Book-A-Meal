export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MealMenuCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Menus',
          key: 'id'
        }
      },
      menuCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'MenuCategories',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MealMenuCategories');
  }
};