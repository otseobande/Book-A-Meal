import {
  chai,
  App,
  adminToken
} from '../../setup';

let res;
describe('GET /api/v1/menu/peep', () => {
  describe('correct response', () => {
    before(async () => {
      res = await chai.request(App)
        .get('/api/v1/menu/peep')
        .set('Authorization', `Bearer ${adminToken}`);
    });

    it('should return status 200', async () => {
      res.should.have.status(200);
    });

    it('should have a response with a status property and a meals array', () => {
      res.body.status.should.be.equal('success');
      res.body.meals.should.be.an('array');
    });
  })


  it('should return err if date is invalid', async () => {
    const res = await chai.request(App)
      .get('/api/v1/menu/asasdf')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(400);
  });

  it('should return empty array if menu for day not found', async () => {
    const res = await chai.request(App)
      .get('/api/v1/menu/2020-05-02')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(200);
    res.body.should.deep.equal({
      status: 'success',
      menus: []
    });
  });
});
