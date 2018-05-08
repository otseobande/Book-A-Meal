import {
    chai,
    App,
    token
} from '../../setup';

describe('DELETE /api/v1/meals/:mealId', function() {
    it('should return a success status code and message', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/meals/2')
                .set('Authorization',  `Bearer ${token}`)

            res.should.have.status(200)
            res.body.status.should.be.true;
            res.body.message.should.be.equal('Meal deleted successfully');
        } catch (err) {
            console.log(err.stack);
        }
    })

    it('should return an error status code and message if not found', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/meals/20')
                .set('Authorization',  `Bearer ${token}`)

            res.should.have.status(404);
            res.body.status.should.be.false;
            res.body.message.should.be.equal('Meal not found');
        } catch (err) {
            console.log(err.stack);
        }
    })

})