import {
  chai,
  sinon,
  mockReq,
  mockRes,
} from '../setup';
import { validateCreate } from '../../middlewares/validators/menu';

const [ensureDateIsValid] = validateCreate;

const req = mockReq({
	body: {
		date: 'asdfadfa'
	}
});

const res = mockRes();

describe('guard middleware', () => {
	const next = sinon.spy();
	
	it('should return error message if date is invalid', () => {
		ensureDateIsValid(req, res, next);

		res.status.should.have.been.calledWith(400);
		res.json.should.have.been.calledWith({
      status: 'error',
      message: 'Date is invalid'
    })
	})
})