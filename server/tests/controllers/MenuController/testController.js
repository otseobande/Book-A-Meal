import chai from 'chai';
import Controller from '../../../controllers/controller';
import MenuController from '../../../controllers/menuController';

chai.should();

describe('Menu Controller', () => {
  it('should be a function', () => {
    MenuController.should.be.a('function');
  });
  it('should extend base controller', () => {
    const menuController = new MenuController();

    menuController.should.be.instanceOf(MenuController);
    menuController.should.be.instanceOf(Controller);
  });
});
