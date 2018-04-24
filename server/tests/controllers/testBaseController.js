import chai from 'chai';
import BaseController from '../../controllers/controller'

chai.should();

describe('Base controller', function(){
	it('should be a function', function(){
		BaseController.should.be.a('function');
	})
})