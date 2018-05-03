
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const notification = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    userId: DataTypes.INTEGER,
    info: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
  }, {});
  Notification.associate = (models) => {
    Notification.belongsTo(models.User,{
      foreignKey: 'userId'
    });
  };
  return Notification;
};

export default notification;
