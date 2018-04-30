import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();


describe('GET /api/v1/orders', () => {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/orders');

            res.should.have.status(200);

        } catch (err) {
            throw err;
        }
    });
    it('should have the right data structure', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/orders');

            res.body.status.should.true;
            res.body.data.should.be.an('array');
            res.body.data[1].should.have.keys('id', 'quantity', 'deliveryAddress', 'user', 'meal');
        } catch (err) {
            throw err;
        }
    });
});