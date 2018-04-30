import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();



describe('DELETE /api/v1/menus/:date', function() {
    it('should return a success status code and message', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/menus/05-22-2018')

            res.should.have.status(202)
            res.body.status.should.be.equal('success');
            res.body.message.should.be.equal('menu deleted successfully');
        } catch (err) {
            throw err;
        }
    })

    it('should return an error status code and message if not found', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/menus/20-12-2029')

            res.should.have.status(404);
            res.body.status.should.be.equal('error');
            res.body.message.should.be.equal('menu not found');
        } catch (err) {
            throw err;
        }
    })

})