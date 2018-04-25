import chai from 'chai';
import MealMenuCategories from '../../dummy-models/mealMenuCategories';

chai.should();

describe('Dummy menus data', () => {
  it('should be an array', () => {
    MealMenuCategories.should.be.an('array');
  });

  it('should have correct keys', () => {
    const mealMenuCategory = MenuCategories[0];
    mealMenuCategory.should.have.keys('id','menuCategoryId','mealId');
  });
});
