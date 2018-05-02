const mealMenuCategory = (sequelize, DataTypes) => {
  const MealMenuCategory = sequelize.define('MealMenuCategory', {
    menuId: DataTypes.INTEGER,
    menuCategoryId: DataTypes.INTEGER
  }, {});
  MealMenuCategory.associate = (models) => {
    MealMenuCategory.hasMany(models.Meal);
    MealMenuCategory.hasMany(models.MenuCategory);
  };
  return MealMenuCategory;
};

export default mealMenuCategory;
