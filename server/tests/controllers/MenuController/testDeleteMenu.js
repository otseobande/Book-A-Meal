import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import MenuController from '../../../controllers/menuController';

chai.use(sinonChai);
chai.should();

const request = {
  params:{
    date: '05-21-2018'
  }
}

const badRequest = {
  params: {
    date: '01-21-2018'
  }
}
const req = mockReq(request);
const res = mockRes();

describe('deleteMenu method', () => {
  beforeEach(() => {
    MenuController.deleteMenu(req, res);
  });

  it('should return 202 on success', () => {
		res.status.should.have.been.calledWith(202);
  });

  it('respond with json message on success', () => {
	  res.json.should.have.been.calledWith({ 
        status: "success",
        message: 'menu deleted successfully' 
      });
  });

  const notFoundReq = mockReq(badRequest);
  
  it('should return error 404 if menu is not found', function(){
    MenuController.deleteMenu(notFoundReq, res);
    res.status.should.have.been.calledWith(404)
  });

  it('should respond with error message', function() {
    MenuController.deleteMenu(notFoundReq, res);
    res.json.should.have.been.calledWith({
      status: "error",
      message: "menu not found",
    })
  });

});