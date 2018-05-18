import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import { order } from '../../models';
import OrderController from '../../controllers/orderController';

const res = mockRes();

describe('Order Controller', () => {
	
	describe('createOrder method', () => {
		it('should call next on err', async () => {
			 try{
        const next = sinon.spy();
        const req = mockReq({
          user: {
            id: 'asdf',
            role: 'caterer'
           },
           body: {
            mealId: 'asdfasdf'
           }
        });
        await OrderController.createOrder(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        throw err
      } 
		})
	})
	describe('getAllOrders method', () => {
		it('should call next on err', async () => {
			 try{
        const next = sinon.spy();
        const req = mockReq({
          user: {
            id: 47345654353534,
            role: 'caterer'
           }
        });
        await OrderController.getAllOrders(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        throw err
      } 
		})
	})
	describe('updateOrder method', () => {
		it('should call next on err', async () => {
			 try{
        const next = sinon.spy();
        const req = mockReq({
          body: {
            userId: 'asdfas'
          }
        });
        req.order = await order.find({
          where: {
            id: '95d84610-4e59-430c-9ab0-116bba424582', 
            userId: 'e20ac257-86cc-4a6f-a619-0249a201c475'
          }
        })
        await OrderController.updateOrder(req, res, next);
        next.should.have.been.called;
      } catch(err) {
        throw err
      } 
		})
	})
})