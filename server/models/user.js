
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM('customer', 'caterer', 'admin'),
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Meal, {
    	foreignKey: "userId"
    });
    User.hasMany(models.Menu, {
    	foreignKey: "userId"
    });
    User.hasMany(models.Order, {
    	foreignKey: "userId"
    });
    User.hasMany(models.Notification, {
    	foreignKey: "userId"
    });
  };

  return User;
};

export default user;
