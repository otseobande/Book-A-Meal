export default (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('MenuCategory', {
    menuId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  MenuCategory.associate = function (models) {
    MenuCategory.hasMany(models.Menu);
  };
  return MenuCategory;
};
