/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    userId: DataTypes.UUID,
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
  });

  Menu.prototype.toJSON = function () {
    const values = {...this.get()};

    delete values.createdAt;
    delete values.updatedAt;
    delete values.deletedAt;

    return values;
  }

  Menu.associate = (models) => {
    Menu.hasMany(models.menuCategory, {
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Menu;
};

export default menu;
