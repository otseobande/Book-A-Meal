const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {});
  Menu.associate = (models) => {
    Menu.hasOne(models.User);
    Menu.belongsToMany(models.MealMenuCategory);
  };
  return Menu;
};

export default menu;
