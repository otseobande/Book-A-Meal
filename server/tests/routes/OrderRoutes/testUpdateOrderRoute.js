import {
    chai,
    App,
    token
} from '../../setup';

describe('PUT /api/v1/orders/:orderId', function() {
    it('should return a success status 200', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/orders/d161e8e8-eed0-4869-bcf1-4679289d940c')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
                    mealId: '64c45c00-ed18-44b7-862a-f12d0481696c',
                    quantity: 1,
                    status: 'pending',
                    deliveryAddress: 'bajiki close'
                  });

            res.should.have.status(200);
        } catch (err) {
           throw err
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/orders/067411a2-23c9-4ce9-b8b6-dff4bb34e03f')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    userId: 'e20ac257-86cc-4a6f-a619-0249a201c475',
                    mealId: '64c45c00-ed18-44b7-862a-f12d0481696c',
                    quantity: 1,
                    status: 'pending',
                    deliveryAddress: 'bajiki close'
                  });

            res.should.have.status(404);
        } catch (err) {
            throw err
        }
    });
});