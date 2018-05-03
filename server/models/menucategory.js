
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const menuCategory = (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('MenuCategory', {
    menuId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  }, {});
  MenuCategory.associate = (models) => {
    MenuCategory.belongsTo(models.Menu,{
    	foreignKey: 'menuId'
    });
  };
  return MenuCategory;
};


export default menuCategory;
