import chai from 'chai';
import chaiHttp from 'chai-http';
import App from "../../../app";

chai.use(chaiHttp);
chai.should();

describe('POST /api/v1/menus', function() {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/menus')
                .send({
                    title: 'test menu',
                    date: '20-10-2019',
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

            res.should.have.status(201);
        } catch (err) {
            throw err;
        }
    });
});