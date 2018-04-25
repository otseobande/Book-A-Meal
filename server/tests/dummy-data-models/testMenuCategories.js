import chai from 'chai';
import MenuCategories from '../../dummy-models/menuCategories';

chai.should();

describe('Dummy menus data', () => {
  it('should be an array', () => {
    MenuCategories.should.be.an('array');
  });

  it('should have correct keys', () => {
    const menuCategory = MenuCategories[0];
    menuCategory.should.have.keys('id','menuId','title');
  });
});
