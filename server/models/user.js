import bcrypt from 'bcrypt';

/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user', {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM('customer', 'caterer', 'admin'),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      hooks: {
	    beforeCreate(user, options) {
	      user.username = user.username.toLowerCase();
	      user.email = user.email.toLowerCase();
	      user.password = bcrypt.hashSync(user.password, 10);
	    }
	  }
    }
  );

  User.prototype.validPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.associate = (models) => {
    User.hasMany(models.meal);
    User.hasMany(models.menu);
    User.hasMany(models.order);
    User.hasMany(models.notification);
  };

  return User;
};

export default user;
