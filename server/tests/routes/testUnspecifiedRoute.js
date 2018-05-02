import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../app";

chai.should();
chai.use(chaiHttp);

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