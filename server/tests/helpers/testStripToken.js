import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import stripToken from '../../helpers/stripToken';

const tokenInHeaderReq = mockReq({
	headers: {
		authorization: `Bearer ${token}`
	}
});

const tokenInQueryReq = mockReq({
	headers: {},
	query: {
		token
	}
});

const tokenInBodyReq = mockReq({
	headers: {},
	body: {
		token
	}
});

describe('strip token function', () => {
	it('should get token from header', () => {
		stripToken(tokenInHeaderReq).should.be.equal(token);
	});

	it('should get token from query', () => {
		stripToken(tokenInQueryReq).should.be.equal(token);
	});

	it('should get token from body', () => {
		stripToken(tokenInBodyReq).should.be.equal(token);
	});
})