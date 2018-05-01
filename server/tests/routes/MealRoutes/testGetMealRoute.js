import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();



describe('GET /api/v1/meals/:mealId', () => {
    it('should return a success status 200', async () => {
        try {
            const res = await chai.request(App)
                .get('/api/v1/meals/1');
            res.should.have.status(200);
        } catch (err) {
            throw err;
        }
    })
    it('should return meal', async () => {
        try {
            const res = await chai.request(App)
                .get('/api/v1/meals/1');
            res.body.data.should.be.an('object');
            res.body.data.id.should.be.equal(1);
        } catch (err) {
            throw err;
        }
    })

    it('should return status 404 if not found', async () => {
        try {
            const res = await chai.request(App)
                .get('/api/v1/meals/80');
            res.should.have.status(404);
        } catch (err){
            throw err;
        }
    })
})