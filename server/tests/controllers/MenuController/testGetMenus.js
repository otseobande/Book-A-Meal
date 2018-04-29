import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import menuController from '../../../controllers/menuController';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
  },
};


const req = mockReq(request);
const res = mockRes();

describe('getMenus method', () => {

  it('should return 200 on success', () => {
  	menuController.getMenus(req, res);
		 res.status.should.have.been.calledWith(200);
  });
});