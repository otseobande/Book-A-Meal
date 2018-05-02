export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    deliveryAddress: DataTypes.STRING
  }, {});
  Order.associate = function (models) {
    Order.hasOne(models.User);
    Order.hasOne(models.Meal);
  };
  return Order;
};
