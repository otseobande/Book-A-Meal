import chai from 'chai';
import DummyModel from '../../dummy-models/DummyModel';
import mealMenuCategories from '../../dummy-models/mealMenuCategories';
import assert from 'assert';

chai.should();

describe('Dummy mealMenuCategories data', () => {
  it('should have correct properties', () => {
  	const data = mealMenuCategories.data[0];
    data.should.have.property('id');
    data.should.have.property('menuCategoryId');
    data.should.have.property('mealId');
  });
});
