import {
  chai,
  App,
  token
} from '../setup';

describe('/api/v1/docs', () => {
	it('should return a status 200', async () => {
		const res = await chai.request(App)
			.get('/api/v1/docs');

		res.should.have.status(200);
	})
})