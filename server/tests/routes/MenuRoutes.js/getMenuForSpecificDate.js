import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../../app";

chai.use(chaiHttp);
chai.should();


describe('GET /api/v1/menus/:date', () => {
    it('should return status 200', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menus/05-22-2018');
            res.should.have.status(200);
        } catch (err) {
            throw err;
        }
    });
    it('should return success message', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menus/05-22-2018');
            res.body.status.should.be.equal('success');
            res.body.data.should.be.an('array');
        } catch (err) {
            throw err;
        }
    })

    it('should return err if date is invalid', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menus/22-05-2018');
            res.should.have.status(400);
            res.body.status.should.be.equal('error');
            res.body.message.should.be.equal('Date format should be DD-MM-YYYY');
        } catch (err) {
            throw err;
        }
    });

    it('should return 404 if menu for day not found', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menus/05-22-2019');
            res.should.have.status(404);
            res.body.status.should.be.equal('error');
            res.body.message.should.be.equal('No Records Found');
        } catch (err) {
            throw err;
        }
    });
});