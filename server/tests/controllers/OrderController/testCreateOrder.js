import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import OrderController from '../../../controllers/orderController';
import Orders from '../../../dummy-models/orders';

chai.use(sinonChai);
chai.should();

const request = {
  body: {
  	userId: 2,
  	mealId: 1,
  	quantity: 3,
  	deliveryAddress: 'rahama road',
  },
};

const badRequest = {
  body: {
    userId: 2,
    quantity: 3,
    deliveryAddress: 'rahama road',
  },
};


const req = mockReq(request);
const badReq = mockReq(badRequest);
const res = mockRes();

describe('createOrder method', () => {
  it('should return 201 on success', () => {
     OrderController.createOrder(req, res);
		res.status.should.have.been.calledWith(200);
  });

  it('should return 400 and err msg if parameters are not supplied correctly', () => {
    OrderController.createOrder(badReq, res);
    res.status.should.have.been.calledWith(400);
    res.json.should.have.been.calledWith({
      status: 'error',
      message: 'Parameters supplied incorrectly',
    });
  })
});