import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

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

describe('POST /api/v1/meals', function() {
	it('should return a success status', async function(){
		try{
			const res = await chai.request(App)
														.post('/api/v1/meals')
														.send({
													    title: 'test meal',
													    description: 'great meal',
													    price: 500,
													    img: 'image_link',
													  });

			res.should.have.status(201);
		} catch(err) {
			throw err;
		}	
	});

	it('malformed request should return error 400', async function (){
		try{
			const res = await chai.request(App)
														.post('/api/v1/meals')
														.send({
													    title: 'test meal',
													    description: 'great meal',
													    img: 'image_link',
													  });

			res.should.have.status(400);
		} catch(err) {
			throw err;
		}	
	});
});

describe('PUT /api/v1/meals/:mealId', function() {
	it('should return a success status 202', async function(){
		try{
			const res = await chai.request(App)
														.put('/api/v1/meals/2')
														.send({
													    title: 'test meal',
													    description: 'great meal',
													    price: 500,
													    img: 'image_link',
													  });

			res.should.have.status(202);
		} catch(err) {
			throw err;
		}	
	});

	it('should return an error 404 if not found', async function (){
		try{
			const res = await chai.request(App)
														.put('/api/v1/meals/20')
														.send({
													    title: 'test meal',
													    description: 'great meal',
													    price: 500,
													    img: 'image_link',
													  });
													  
			res.should.have.status(404);
		} catch(err) {
			throw err;
		}
	})

});