import {
    chai,
    App,
    token
} from '../setup';

describe('unspecified routes', () => {
	it('should send a welcome message at root', async () => {
		try {
			const res = await chai.request(App)
				.get('/');
			res.should.have.status(200);
			res.body.should.be.deep.equal({
			  message: 'Welcome to Book-A-Meal'
			})
		} catch(err) {
			throw err;
		}
	})
	it('should return error 404', async () => {
		try {
			const res = await chai.request(App)
				.get('/kangaroo');
			res.should.have.status(404);
			res.body.should.be.deep.equal({
			  message: 'Route not found'
			})
		} catch(err) {
			throw err;
		}
	})
})