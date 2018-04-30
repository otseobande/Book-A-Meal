import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();


describe('PUT /api/v1/meals/:mealId', function() {
    it('should return a success status 202', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/meals/3')
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(202);
        } catch (err) {
            throw err;
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/meals/20')
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(404);
        } catch (err) {
            throw err;
        }
    });
});