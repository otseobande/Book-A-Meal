export default (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    userId: DataTypes.INTEGER,
    info: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN
  }, {});
  Notification.associate = function (models) {
    Notification.hasOne(models.User);
  };
  return Notification;
};
