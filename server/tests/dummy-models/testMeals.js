import chai from 'chai';
import meals from '../../dummy-models/meals';

chai.should();

describe('Dummy meals data', () => {
 
  it('should contain meal objects', () => {
    const mealsData = meals.data[0];
    mealsData.should.have.property('id');
    mealsData.should.have.property('userId');
    mealsData.should.have.property('title');
    mealsData.should.have.property('description');
    mealsData.should.have.property('price');
    mealsData.should.have.property('img');
  });
});
