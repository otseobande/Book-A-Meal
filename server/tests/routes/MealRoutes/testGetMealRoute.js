import {
    chai,
    App,
    token
} from '../../setup'

describe('GET /api/v1/meals/:mealId', () => {
    it('should return a success status 200', async () => {
        try {
            const res = await chai.request(App)
                .get('/api/v1/meals/1')
                .set('Authorization',  `Bearer ${token}`);
            res.should.have.status(200);
        } catch (err) {
            console.log(err.stack);
        }
    })
    it('should return meal', async () => {
        try {
            const res = await chai.request(App)
                .get('/api/v1/meals/1')
                .set('Authorization',  `Bearer ${token}`);
            res.body.data.should.be.an('object');
            res.body.data.id.should.be.equal(1);
        } catch (err) {
            console.log(err.stack);
        }
    })

    it('should return status 404 if not found', async () => {
        try {
            const res = await chai.request(App)
                .get('/api/v1/meals/9000')
                .set('Authorization',  `Bearer ${token}`);
            res.should.have.status(404);
        } catch (err){
            console.log(err.stack);
        }
    })
})