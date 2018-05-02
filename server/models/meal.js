export default (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    id: DataTypes.INT,
    userId: DataTypes.INT,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INT,
    img: DataTypes.STRING
  }, {});

  Meal.associate = function(models) {
    // associations can be defined here
  };
  
  return Meal;
};