
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('meal', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});

  Meal.associate = (models) => {
    Meal.hasMany(models.order);
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
