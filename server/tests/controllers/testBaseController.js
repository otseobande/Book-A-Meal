import chai from 'chai';
import BaseController from '../../controllers/controller';

chai.should();

describe('Base controller', () => {
  it('should be a function', () => {
    BaseController.should.be.a('function');
  });
});
