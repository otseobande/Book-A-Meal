
/**
 * @model
 * @param  {object} sequelize - Sequelize DB connection object
 * @param  {object} Datatypes - Sequelize Datatypes
 * @return {object} Sequelize Model
 */
const mealMenuCategory = (sequelize, DataTypes) => {
  const MealMenuCategory = sequelize.define('mealMenuCategory', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    mealId: DataTypes.UUID,
    menuCategoryId: DataTypes.UUID,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    freeze: true
  });
  MealMenuCategory.associate = (models) => {
  	//
  };
  return MealMenuCategory;
};

export default mealMenuCategory;
