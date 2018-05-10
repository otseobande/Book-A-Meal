import {
    chai,
    App,
    token
} from '../../setup';

describe('PUT /api/v1/orders/:orderId', function() {
    it('should return a success status 200', async function() {
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

            res.should.have.status(200);
        } catch (err) {
           console.log(err.stack)
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/orders/3090909')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    userId: 2,
                    mealId: 2,
                    quantity: 1,
                    status: 'pending',
                    deliveryAddress: 'bajiki close'
                  });

            res.should.have.status(404);
        } catch (err) {
            console.log(err.stack)
        }
    });
});