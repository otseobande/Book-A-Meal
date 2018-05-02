export default (sequelize, DataTypes) => {
  const MealMenuCategory = sequelize.define('MealMenuCategory', {
    menuId: DataTypes.INTEGER,
    menuCategoryId: DataTypes.INTEGER
  }, {});
  MealMenuCategory.associate = function (models) {
    MealMenuCategory.hasMany(models.Meal);
    MealMenuCategory.hasMany(models.MenuCategory);
  };
  return MealMenuCategory;
};
