export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {});
  Menu.associate = function (models) {
    Menu.hasOne(models.User);
    Menu.belongsToMany(models.MealMenuCategory);
  };
  return Menu;
};
