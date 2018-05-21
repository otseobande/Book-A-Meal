import {
  chai,
  sinon,
  mockReq,
  mockRes
} from '../setup';
import { validateUpdate } from '../../middlewares/validators/orders';

const [,validateExpiry] = validateUpdate;

describe('Order expiry middleware', () => {
	// it('should return 400 if order is expired', () => {

	// })
	it('should call next on error', async () => {
		const next = sinon.spy();
    const req = mockReq({
     	params: {
     		orderId: 'asdf'
     	},
      user: {
        id: 'fda'
      }
    });

    await validateExpiry(req, null, next);
    next.should.have.been.called;
	})
})