import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../../app";

chai.use(chaiHttp);
chai.should();


describe('POST /api/v1/meals', function() {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/meals')
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    price: 500,
                    img: 'image_link',
                });

            res.should.have.status(201);
        } catch (err) {
            throw err;
        }
    });


    it('malformed request should return error 400', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/meals')
                .send({
                    title: 'test meal',
                    description: 'great meal',
                    img: 'image_link',
                });

            res.should.have.status(400);
        } catch (err) {
            throw err;
        }
    });
});