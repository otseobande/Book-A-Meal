
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const mealMenuCategory = (sequelize, DataTypes) => {
  const MealMenuCategory = sequelize.define('mealMenuCategory', {
    mealId: DataTypes.INTEGER,
    menuCategoryId: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    freeze: true
  });
  MealMenuCategory.associate = (models) => {
  	//
  };
  return MealMenuCategory;
};

export default mealMenuCategory;
