
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const notification = (sequelize, DataTypes) => {
  const Notification = sequelize.define('notification', {
    userId: DataTypes.INTEGER,
    info: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Notification.associate = (models) => {
    //
  };
  return Notification;
};

export default notification;
