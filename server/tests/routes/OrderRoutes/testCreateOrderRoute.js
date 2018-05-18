import {
    chai,
    App,
    token
} from '../../setup';

describe('POST /api/v1/orders', () => {

    it('should return a status 200 and success message', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/orders')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    mealId: '64c45c00-ed18-44b7-862a-f12d0481696c',
                    quantity: 3,
                    status: 'pending',
                    deliveryAddress: 'rahama road',
                });

            res.should.have.status(200);
            res.body.should.have.property('status');
            res.body.should.have.property('message');
        } catch (err) {
           throw err
        }
    });
});