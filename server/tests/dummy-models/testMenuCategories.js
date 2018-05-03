import { chai } from '../setup';
import menuCategories from '../../dummy-models/menuCategories';

describe('Dummy menuCategories data', () => {

  it('should have correct properties', () => {
    const menuCategoriesData = menuCategories.data[0];
    menuCategoriesData.should.have.property('id');
    menuCategoriesData.should.have.property('menuId');
    menuCategoriesData.should.have.property('title');
  });
});
