import {
    chai,
    App,
    token
} from '../../setup';

describe('DELETE /api/v1/menus/:date', function() {
    it('should return a success status code and message', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/menu/05-22-2018')
                .set('Authorization',  `Bearer ${token}`);

            res.should.have.status(200)
            res.body.status.should.be.true;
            res.body.message.should.be.equal('menu deleted successfully');
        } catch (err) {
            throw err;
        }
    })

    it('should return an error status code and message if not found', async function() {
        try {
            const res = await chai.request(App)
                .delete('/api/v1/menu/20-12-2029')

            res.should.have.status(404);
            res.body.status.should.be.false;
            res.body.message.should.be.equal('menu not found');
        } catch (err) {
            throw err;
        }
    })

})