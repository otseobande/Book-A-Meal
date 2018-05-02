export default (sequelize, DataTypes) => {
  var Menu = sequelize.define('Menu', {
    id: DataTypes.INT,
    userId: DataTypes.INT,
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};