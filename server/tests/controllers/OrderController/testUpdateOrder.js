import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { mockReq, mockRes } from 'sinon-express-mock';

import OrderController from '../../../controllers/orderController';
import orders from '../../../dummy-models/orders';


chai.use(sinonChai);
chai.should();

const request = {
  body: {
    userId: 2,
    mealId: 2,
    quantity: 1,
    status: 'pending',
    deliveryAddress: 'bajiki close'
  },
  params:{
    orderId: 3
  }
};

const notFoundRequest = {
  body: {
    userId: 2,
    mealId: 2,
    quantity: 1,
    status: 'pending',
    deliveryAddress: 'bajiki close'
  },
  params:{
    orderId: 20
  }
}

const req = mockReq(request);
const res = mockRes();

describe('updateOrder method', () => {
  beforeEach(() => {
    OrderController.updateOrder(req, res);
  });

  it('should return 202 on success', () => {
		res.status.should.have.been.calledWith(202);
  });

  it('respond with json message on success', () => {
	  res.json.should.have.been.calledWith({ 
        status: "success",
        message: 'order updated successfully' 
      });
  });

  it('should update order data', () => {
    const testorder = orders.find(order => order.id === req.params.orderId);
    testorder.should.not.be.undefined;
  });

  const notFoundReq = mockReq(notFoundRequest);

  it('should return error 404 if "id" is not found', function(){
    OrderController.updateOrder(notFoundReq, res);
    res.status.should.have.been.calledWith(404);
  });

  it('should respond with error message', function() {
    OrderController.updateOrder(notFoundReq, res);
    res.json.should.have.been.calledWith({
      status: "error",
      message: "order not found",
    })
  });

});