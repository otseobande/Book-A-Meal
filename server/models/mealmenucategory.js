
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const mealMenuCategory = (sequelize, DataTypes) => {
  const MealMenuCategory = sequelize.define('MealMenuCategory', {
    mealId: DataTypes.INTEGER,
    menuCategoryId: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  }, {});
  MealMenuCategory.associate = (models) => {
    MealMenuCategory.hasOne(models.Menu);
    MealMenuCategory.hasOne(models.MenuCategory);
  };
  return MealMenuCategory;
};

export default mealMenuCategory;
