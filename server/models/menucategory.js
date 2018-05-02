const menuCategory = (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('MenuCategory', {
    menuId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  MenuCategory.associate = (models) => {
    MenuCategory.hasMany(models.Menu);
  };
  return MenuCategory;
};


export default menuCategory;
