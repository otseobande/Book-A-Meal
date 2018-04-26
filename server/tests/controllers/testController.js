import chai from 'chai';
import Controller from '../../controllers/controller';

chai.should();

describe('Base controller', () => {
  it('should be a function', () => {
    Controller.should.be.a('function');
  });
});
