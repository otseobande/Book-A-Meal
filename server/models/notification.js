
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const notification = (sequelize, DataTypes) => {
  const Notification = sequelize.define('notification', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      info: {
        allowNull: false,
        type: DataTypes.STRING
      },
      isRead: {
        defaultValue: false,
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        type: DataTypes.DATE,
      }
  }, {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] },
    },
  });


  Notification.associate = (models) => {
    Notification.belongsTo(models.user);
  };
  return Notification;
};


export default notification;
