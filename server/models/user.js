import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { jwtExpiry, jwtSecret } from '../config';

/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const user = (sequelize, DataTypes) =>  {
  const User = sequelize.define('user', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM('customer', 'caterer', 'admin'),
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      paranoid: true,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
      },
      hooks: {
  	    beforeCreate(user, options) {
  	      user.username = user.username.toLowerCase();
  	      user.email = user.email.toLowerCase();
  	      user.password = bcrypt.hashSync(user.password, 10);
  	    }
  	  }
    }
  );

  User.prototype.toJSON = function () {
    const values = {...this.get()};

    delete values.password;
    delete values.createdAt;
    delete values.updatedAt;
    delete values.deletedAt;

    return values;
  }

  User.prototype.validPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.generateToken = function (password) {
    return jwt.sign({
      id: this.id,
      role: this.role
    }, jwtSecret, {
      expiresIn: `${jwtExpiry}h`
    });

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
