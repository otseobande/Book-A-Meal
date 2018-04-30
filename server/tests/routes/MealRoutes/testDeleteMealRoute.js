import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();



describe('DELETE /api/v1/meals/:mealId', function() {
    it('should return a success status code and message', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/meals/4')

            res.should.have.status(202)
            res.body.status.should.be.equal('success');
            res.body.message.should.be.equal('Meal deleted successfully');
        } catch (err) {
            throw err;
        }
    })

    it('should return an error status code and message if not found', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/meals/20')

            res.should.have.status(404);
            res.body.status.should.be.equal('error');
            res.body.message.should.be.equal('Meal not found');
        } catch (err) {
            throw err;
        }
    })

})