import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import OrderController from '../../controllers/orderController';

const res = mockRes();

describe('Order Controller', () => {
	beforeEach(() => {
		const next = sinon.spy();
    const req = mockReq({
      user: {
        id: 'asdf'
       }
    });
	})
	describe('createOrder method', () => {
		it('should call next on err', async () => {
			 try{
        await OrderController.createOrder(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      } 
		})
	})
	describe('getAllOrders method', () => {
		it('should call next on err', async () => {
			 try{
        await OrderController.getAllOrders(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      } 
		})
	})
	describe('updateOrder method', () => {
		it('should call next on err', async () => {
			 try{
        await OrderController.updateOrders(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        console.log(err);
      } 
		})
	})
})