export default (sequelize, DataTypes) => {
  var Notification = sequelize.define('Notification', {
    id: DataTypes.INT,
    userId: DataTypes.INT,
    mealId: DataTypes.INT,
    info: DataTypes.STRING,
    isRead: DataTypes.BOOL
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
  };
  return Notification;
};