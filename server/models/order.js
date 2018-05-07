
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const order = (sequelize, DataTypes) => {
  const Order = sequelize.define('order', {
    userId: DataTypes.INTEGER,
    mealId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    deliveryAddress: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Order.associate = (models) => {
    //
  };
  return Order;
};

export default order;
