import chai from 'chai';
import Menus from '../../dummy-models/menus';

chai.should();

describe('Dummy menus data', () => {
  it('should be an array', () => {
    Menus.should.be.an('array');
  });

  it('should have correct keys', () => {
    const menu = Menus[0];
    menu.should.have.keys('id','userId','title','date');
  });
});
