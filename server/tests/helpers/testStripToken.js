import {
  chai,
  sinon,
  mockReq,
  mockRes,
  token
} from '../setup';
import stripToken from '../../helpers/stripToken';

const tokenInAuthBearerHeaderReq = mockReq({
	headers: {
		authorization: `Bearer ${token}`
	}
});

const tokenInAuthWithoutBearerHeaderReq = mockReq({
	headers: {
		authorization: token
	}
});

const tokenInHeaderAsTokenReq = mockReq({
	headers: {
		token
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

const emptyReq = mockReq({
	headers: {}
})
describe('strip token function', () => {
	it('should get token from Auth bearer header', () => {
		stripToken(tokenInAuthBearerHeaderReq).should.be.equal(token);
	});

	it('should get token from Auth without bearer header', () => {
		stripToken(tokenInAuthWithoutBearerHeaderReq).should.be.equal(token);
	});

	it('should get token from token header', () => {
		stripToken(tokenInHeaderAsTokenReq).should.be.equal(token);
	});

	it('should get token from query', () => {
		stripToken(tokenInQueryReq).should.be.equal(token);
	});

	it('should get token from body', () => {
		stripToken(tokenInBodyReq).should.be.equal(token);
	});

	it('should return empty string if token not found', () => {
		stripToken(emptyReq).should.be.equal('');
	});
})