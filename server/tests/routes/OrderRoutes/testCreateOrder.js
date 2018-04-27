import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../../app";

chai.use(chaiHttp);
chai.should();


describe('POST /api/v1/orders', () => {

    it('should return a status 200', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/orders')
                .send({
                    userId: 2,
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
                .send({
                    userId: 2,
                    mealId: 1,
                    quantity: 3,
                    deliveryAddress: 'rahama road',
                });

            res.body.status.should.equal('success');
            res.body.message.should.equal('Order created successfully');
        } catch (err) {
            throw err;
        }
    });
});