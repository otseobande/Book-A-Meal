import {
    chai,
    App,
    token
} from '../../setup';

describe('GET /api/v1/menus', () => {
    it('should return a success status', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menu/all')
                .set('Authorization',  `Bearer ${token}`);

            res.should.have.status(200);

        } catch (err) {
            throw err;
        }
    });
    it('should have the right data structure', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menu/all');

            res.body.status.should.true;
        } catch(err) {
            throw err;
        }
    });
});