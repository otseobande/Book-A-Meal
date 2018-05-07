import {
    chai,
    App,
    token
} from '../../setup';

describe('POST /api/v1/orders', () => {

    it('should return a status 200', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/orders')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    mealId: 1,
                    quantity: 3,
                    deliveryAddress: 'rahama road',
                });

            res.should.have.status(200);

        } catch (err) {
            throw err;
        }
    });
    it('should return success message', async function() {
        try {
           const res = await chai.request(App)
                .post('/api/v1/orders')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    mealId: 1,
                    quantity: 3,
                    deliveryAddress: 'rahama road',
                });

            res.body.status.should.true;
            res.body.message.should.equal('Order created successfully');
        } catch (err) {
            throw err;
        }
    });
});