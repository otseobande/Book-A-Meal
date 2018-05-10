import {
    chai,
    App,
    token
} from '../../setup';

describe('PUT /api/v1/menu/:date', function() {
    it('should return a success status 200', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/menu/2018-06-24')
                .set('Authorization',  `Bearer ${token}`)
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

            res.should.have.status(200);
            res.body.status.should.be.true;
        } catch (err) {
            console.log(err.stack);
        }
    });

    it('should return a success status 200 without categories', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/menu/2018-06-25')
                .set('Authorization',  `Bearer ${token}`)
                .send({
                    title: 'test menu',
                });

            res.should.have.status(200);
            res.body.status.should.be.true;
        } catch (err) {
            console.log(err.stack);
        }
    });

    it('should return an error 404 if not found', async function() {
        try {
            const res = await chai.request(App)
                .put('/api/v1/menu/2018-01-24')
                .set('Authorization',  `Bearer ${token}`)
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
            console.log(err.stack);
        }
    });
});