import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();


describe('GET /api/v1/menus', () => {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menus');

            res.should.have.status(200);

        } catch (err) {
            throw err;
        }
    });
    it('should have the right data structure', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menus');

            res.body.status.should.true;
            res.body.data.should.be.an('array');
            res.body.data[0].should.have.property('id');
            res.body.data[0].should.have.property('title');
            res.body.data[0].should.have.property('date');
            res.body.data[0].should.have.property('categories');
            res.body.data[0].categories.should.be.an('array');
        } catch(err) {
            throw err;
        }
    });
});