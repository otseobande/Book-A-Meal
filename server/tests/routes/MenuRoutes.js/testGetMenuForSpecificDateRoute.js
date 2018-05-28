import {
  chai,
  App,
  adminToken
} from '../../setup';

describe('GET /api/v1/menu/:date', () => {
  it('should return status 200', async () => {
    const res = await chai.request(App)
      .get('/api/v1/menu/2018-06-24')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(200);
  });


  it('should return err if date is invalid', async () => {
    const res = await chai.request(App)
      .get('/api/v1/menu/asasdf')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(400);
  });

  it('should return 404 if menu for day not found', async () => {
    const res = await chai.request(App)
      .get('/api/v1/menu/2020-05-02')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(404);
    res.body.should.deep.equal({
      status: 'error',
      message: 'Menu not set for this day'
    });
  });
});
