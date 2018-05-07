import {
    App,
    chai
} from '../../setup';

describe('POST /api/v1/auth/login', function() {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/auth/login')
                .send({
                    username: 'otseobande',
                    password: 'bookameal'
                });

            res.should.have.status(200);
        } catch (err) {
            throw err;
        }
    });


    it('malformed request should return error 400', async function() {
        try {
            const res = await chai.request(App)
                .post('/api/v1/auth/login')
                .send({
                    username: 'dogo',
                });

            res.should.have.status(400);
        } catch (err) {
            throw err;
        }
    });
});