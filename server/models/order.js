export default (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    id: DataTypes.INT,
    userId: DataTypes.INT,
    mealId: DataTypes.INT,
    quantity: DataTypes.INT,
    status: DataTypes.STRING,
    deliveryAddress: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};