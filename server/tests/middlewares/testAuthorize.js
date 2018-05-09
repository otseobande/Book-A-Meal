import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import authorize from '../../middlewares/authorize';

const req = mockReq({
	headers: {
		authorization: 'Bearer asdf;uwajkdsf'
	}
});
const headerAuth = mockReq({
	headers: {
		authorization: `Bearer ${token}`
	}
})

const queryAuth = mockReq({
	query: {
		token
	}
})

const res = mockRes();

describe('Authorize middleware', () => {
	beforeEach(() => {
		const next = sinon.spy();
	})
	
	const next = sinon.spy();
	it('should add user object to req', () => {

		authorize(headerAuth, res,next);
		headerAuth.user.should.not.be.undefined;
	})

	it('should call next function when token is in header', () => {
		authorize(headerAuth, res, next);
		next.should.have.been.called;
	})

	it('should call next function when token is in query', () => {
		authorize(queryAuth, res, next);
		next.should.have.been.called;
	})

	it('should return error 401 if token is wrong', () => {
		authorize(req, res);
		res.status.should.have.been.calledWith(401);
		res.json.should.have.been.calledWith({
			status: false,
			message: 'Unauthorized'
		});
	})
})