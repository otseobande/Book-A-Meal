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

            res.body.status.should.equal("success");
            res.body.data.should.be.an('array');
            res.body.data[0].should.have.keys('id', 'title', 'date', 'categories');
            res.body.data[0].categories.should.be.an('array');
            res.body.data[0].categories[0].should.have.keys('id', 'title', 'meals');
            res.body.data[0].categories[0].meals.should.be.an('array');
        } catch (err) {
            throw err;
        }
    });
});