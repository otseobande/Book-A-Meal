import {
    chai,
    App,
    token
} from '../../setup'

describe('PUT /api/v1/meals/:mealId', function() {
    it('should return a success status 200', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/meals/3')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(200);
        } catch (err) {
            console.log(err.stack);
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/meals/9000')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(404);
        } catch (err) {
            console.log(err.stack);
        }
    });
});