const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = (models) => {
    User.belongsToMany(models.Meal);
    User.belongsToMany(models.Menu);
    User.belongsToMany(models.Order);
    User.belongsToMany(models.Notifications);
  };

  return User;
};

export default user;
