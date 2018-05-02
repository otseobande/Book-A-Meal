import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();


describe('PUT /api/v1/menu/:date', function() {
    it('should return a success status 202', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/menu/05-24-2018')
                .send({
                    title: 'test menu',
                    categories: [{
                            title: "Benue style",
                            mealIds: [1, 3]
                        },
                        {
                            title: "Jacuzzi paruzi",
                            mealIds: [2, 3]
                        }
                    ]
                });

            res.should.have.status(202);
            res.body.status.should.be.true;
        } catch (err) {
            throw err;
        }
    });

    it('should return a success status 202 without categories', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/menu/05-24-2018')
                .send({
                    title: 'test menu',
                });

            res.should.have.status(202);
            res.body.status.should.be.true;
        } catch (err) {
            throw err;
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/menu/04-10-2018')
                .send({
                    title: 'test menu',
                    categories: [{
                            title: "Benue style",
                            mealIds: [1, 3]
                        },
                        {
                            title: "Jacuzzi paruzi",
                            mealIds: [2, 3]
                        }
                    ]
                });

            res.should.have.status(404);
            res.body.status.should.be.false;
        } catch (err) {
            throw err;
        }
    });
});