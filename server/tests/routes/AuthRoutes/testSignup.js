import {
    chai,
    App,
} from '../../setup'

describe('POST /api/v1/auth/signup', function() {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/auth/signup')
                .send({
                    username: 'otsde',
                    fullName: 'Sele Mege',
                    email: 'sele@gmail.com',
                    password: 'bookameal',
                    role: 'customer',
                });

            res.should.have.status(201);
        } catch (err) {
            throw err;
        }
    });


    it('malformed request should return error 400', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/auth/signup')
                .send({
                    username: 'dogo',
                    password: 'yaro',
                });

            res.should.have.status(400);
        } catch (err) {
            throw err;
        }
    });
});