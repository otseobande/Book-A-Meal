export default (sequelize, DataTypes) => {
  var MenuCategory = sequelize.define('MenuCategory', {
    id: DataTypes.INT,
    menuId: DataTypes.INT,
    title: DataTypes.STRING
  }, {});
  MenuCategory.associate = function(models) {
    // associations can be defined here
  };
  return MenuCategory;
};