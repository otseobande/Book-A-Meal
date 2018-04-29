import DummyModel from './dummyModel';

const MealMenuCategories = new DummyModel([
  {
    id: 1,
    menuCategoryId: 1,
    mealId: 2,
  },
  {
    id: 2,
    menuCategoryId: 2,
    mealId: 3,
  },
  {
    id: 3,
    menuCategoryId: 2,
    mealId: 1,
  },
  {
    id: 4,
    menuCategoryId: 3,
    mealId: 1,
  },
]);

export default MealMenuCategories;
