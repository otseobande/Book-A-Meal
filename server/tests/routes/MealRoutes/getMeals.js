import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../../app";

chai.use(chaiHttp);
chai.should();

describe('GET /api/v1/meals', function() {
	it('should return a success status', async function(){
		try{
			const res = await chai.request(App).get('/api/v1/meals');
			res.should.have.status(200);
		} catch(err) {
			throw err;
		}	
	})
});
