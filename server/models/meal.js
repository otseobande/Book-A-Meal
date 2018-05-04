
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  }, {});

  Meal.associate = (models) => {
    Meal.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    Meal.hasMany(models.Order,  { 
      foreignKey: 'mealId',
    })
    Meal.belongsToMany(models.MenuCategory, {
      through: models.MealMenuCategory
    });
  };

  return Meal;
};

export default meal;
