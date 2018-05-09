import {
    chai,
    App,
    token
} from '../../setup';

describe('GET /api/v1/menu/:date', () => {
    it('should return status 200', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menu/2018-06-24')
                .set('Authorization',  `Bearer ${token}`);
                
            res.should.have.status(200);
        } catch (err) {
            console.log(err.stack);
        }
    });
    it('should return success message', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menu/2018-06-24')
                .set('Authorization',  `Bearer ${token}`);
            res.body.status.should.be.true;
            //res.body.data.should.be.an('array');
        } catch (err) {
            console.log(err.stack);
        }
    })

    it('should return err if date is invalid', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menu/asasdf')
                .set('Authorization',  `Bearer ${token}`);
            res.should.have.status(400);
        } catch (err) {
            console.log(err.stack);
        }
    });

    it('should return 404 if menu for day not found', async function() {
        try {
            const res = await chai.request(App)
                .get('/api/v1/menu/2020-05-02')
                .set('Authorization',  `Bearer ${token}`)
               
            res.should.have.status(404);
            res.body.status.should.be.false;
            res.body.message.should.be.equal('No Records Found');
        } catch (err) {
            console.log(err.stack);
        }
    });
});