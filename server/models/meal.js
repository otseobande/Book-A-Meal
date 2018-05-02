const meal = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    img: DataTypes.STRING
  }, {});

  Meal.associate = (models) => {
    Meal.hasOne(models.User);
    Meal.belongsToMany(models.MealMenuCategory);
  };

  return Meal;
};

export default meal;
