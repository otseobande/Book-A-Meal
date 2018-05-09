import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import stripToken from '../../helpers/stripToken';

const headerAuthReq = mockReq({
	headers: {
		authorization: `Bearer ${token}`
	}
})

const queryAuthReq = mockReq({
	headers: {},
	query: {
		token
	}
})

describe('strip token function', () => {
	it('should get token from header', () => {
		stripToken(headerAuthReq).should.be.equal(token);
	})

	it('should get token from query', () => {
		stripToken(queryAuthReq).should.be.equal(token);
	})
})