import {
    chai,
    App,
    token
} from '../setup';

describe('unspecified routes', () => {
	it('should return error 404', async () => {
		try {
			const res = await chai.request(App)
				.get('/kangaroo');

		} catch(err) {
			throw err;
		}
	})
})