import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import authorize from '../../middlewares/authorize';

const res = mockRes();

describe('Authorize middleware', () => {
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
		},
		headers:{}
	})
	
	it('should add user object to req', () => {
		const next = sinon.spy();
		authorize(headerAuth, res,next);
		headerAuth.user.should.not.be.undefined;
	})

	it('should call next function when token is in header', () => {
		const next = sinon.spy();
		authorize(headerAuth, res, next);
		next.should.have.been.called;
	})

	it('should call next function when token is in query', () => {
		const next = sinon.spy();
		authorize(queryAuth, res, next);
		next.should.have.been.called;
	})

	it('should return error 401 if token is wrong', () => {
		const next = sinon.spy();
		authorize(req, res);
		res.status.should.have.been.calledWith(401);
		res.json.should.have.been.calledWith({
			status: 'error',
			message: 'Token is invalid or not provided'
		});
	})
})