import {
  chai,
  App,
  token
} from '../setup';

describe('unspecified routes', () => {
	it('should send a welcome message at /', async () => {
		const res = await chai.request(App)
			.get('/');
		res.should.have.status(200);
		res.body.should.be.deep.equal({
			status: 'success',
		  message: 'Welcome to Book-A-Meal'
		})
		
	})
	it('should return error 404 if route not found', async () => {
		const res = await chai.request(App)
			.get('/kangaroo');
		res.should.have.status(404);
		res.body.should.be.deep.equal({
			status: 'error',
		  message: 'Route not found'
		})
	})
})