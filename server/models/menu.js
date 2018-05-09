
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const menu = (sequelize, DataTypes) => {
  const Menu = sequelize.define('menu', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  Menu.associate = (models) => {
    Menu.hasMany(models.menuCategory, {
      onDelete: 'CASCADE',
      hooks: true
    });
  };
  return Menu;
};

export default menu;
