import { chai } from '../setup';
import menus from '../../dummy-models/menus';

describe('Dummy menus data', () => {

  it('should have correct properties', () => {
    const menuData = menus.data[0];
    menuData.should.have.property('id');
    menuData.should.have.property('userId');
    menuData.should.have.property('title');
    menuData.should.have.property('date');
  });
});
