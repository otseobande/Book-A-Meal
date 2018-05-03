import {
    chai,
    App,
    token
} from '../../setup';

describe('PUT /api/v1/orders/:orderId', function() {
    it('should return a success status 202', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/orders/1')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    userId: 2,
                    mealId: 2,
                    quantity: 1,
                    status: 'pending',
                    deliveryAddress: 'bajiki close'
                  });

            res.should.have.status(202);
        } catch (err) {
            throw err;
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/orders/3090909')
                .send({
                    userId: 2,
                    mealId: 2,
                    quantity: 1,
                    status: 'pending',
                    deliveryAddress: 'bajiki close'
                  });

            res.should.have.status(404);
        } catch (err) {
            throw err;
        }
    });
});