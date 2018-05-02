export default (sequelize, DataTypes) => {
  var MealMenuCategory = sequelize.define('MealMenuCategory', {
    id: DataTypes.INT,
    menuId: DataTypes.INT,
    menuCategoryId: DataTypes.INT
  }, {});
  MealMenuCategory.associate = function(models) {
    // associations can be defined here
  };
  return MealMenuCategory;
};