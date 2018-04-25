import chai from 'chai';
import Meals from '../../dummy-models/meals';

chai.should();

describe('Dummy meals data', () => {
  it('should be an array', () => {
    Meals.should.be.an('array');
  });
  it('should contain meal objects', () => {
    const meal = Meals[0];
    meal.should.have.keys('id','title','description','price','img');
  });
});
