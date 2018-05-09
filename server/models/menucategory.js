
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const menuCategory = (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('menuCategory', {
    menuId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  MenuCategory.associate = (models) => {
    MenuCategory.belongsToMany(models.meal, {
    	through: models.mealMenuCategory,
    	onDelete: 'CASCADE',
      hooks: true
    });
  };
  return MenuCategory;
};


export default menuCategory;
