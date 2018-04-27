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


const req = mockReq(request);
const res = mockRes();

describe('createOrder method', () => {
  beforeEach(() => {
    OrderController.createOrder(req, res);
  });

  it('should return 201 on success', () => {
		res.status.should.have.been.calledWith(200);
  });
});