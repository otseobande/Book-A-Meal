import {
  chai,
  App,
  adminToken,
  catererToken,
  customerToken
} from '../../setup';

describe('GET /api/v1/orders', () => {
  it('should return a success status', async function() {
    const res = await chai.request(App)
      .get('/api/v1/orders')
      .set('Authorization',  `Bearer ${catererToken}`);

    res.should.have.status(200);
  });

  it('should return a success status as customer', async function() {
    const res = await chai.request(App)
      .get('/api/v1/orders')
      .set('Authorization',  `Bearer ${customerToken}`);

    res.should.have.status(200);
  });

  it('should return a success status as admin', async function() {
    const res = await chai.request(App)
      .get('/api/v1/orders')
      .set('Authorization',  `Bearer ${adminToken}`);

    res.should.have.status(200);
  });
});