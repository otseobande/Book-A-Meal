import chai from 'chai';
import Controller from '../../../controllers/controller';
import MealController from '../../../controllers/mealController';

chai.should();

describe('Meal Controller', () => {
  it('should be a function', () => {
    MealController.should.be.a('function');
  });
  it('should extend base controller', () => {
    const mealController = new MealController();

    mealController.should.be.instanceOf(MealController);
    mealController.should.be.instanceOf(Controller);
  });
});
