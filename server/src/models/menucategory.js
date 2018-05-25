
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const menuCategory = (sequelize, DataTypes) => {
  const MenuCategory = sequelize.define('menuCategory', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    menuId: DataTypes.UUID,
    title: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
    }
  });

  MenuCategory.prototype.toJSON = function () {
    const values = { ...this.get() };

    delete values.menuId;
    delete values.createdAt;
    delete values.updatedAt;
    delete values.deletedAt;

    return values;
  };

  MenuCategory.associate = (models) => {
    MenuCategory.belongsToMany(models.meal, {
    	through: 'mealMenuCategory',
    	onDelete: 'CASCADE',
      hooks: true
    });
  };
  return MenuCategory;
};


export default menuCategory;
