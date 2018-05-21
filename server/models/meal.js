
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    },
  });

  Meal.prototype.toJSON = function () {
    const values = {...this.get()};

    delete values.createdAt;
    delete values.updatedAt;
    delete values.deletedAt;

    return values;
  }
  
  Meal.associate = (models) => {
    Meal.hasMany(models.order);
    Meal.belongsTo(models.user, {
      as: 'caterer',
      foreignKey: 'userId'
    });
    Meal.belongsToMany(models.menuCategory, {
      through: 'mealMenuCategory',
      foreignKey: 'mealId',
      onDelete: 'CASCADE',
      hooks: true
    });
  };

  return Meal;
};

export default meal;
