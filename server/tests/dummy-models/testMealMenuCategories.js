import {
	chai,
	assert
} from '../setup';
import DummyModel from '../../dummy-models/DummyModel';
import mealMenuCategories from '../../dummy-models/mealMenuCategories';

describe('Dummy mealMenuCategories data', () => {
  it('should have correct properties', () => {
  	const data = mealMenuCategories.data[0];
    data.should.have.property('id');
    data.should.have.property('menuCategoryId');
    data.should.have.property('mealId');
  });
});
