import {
  chai,
  App,
  token,
  customerToken
} from '../../setup';

describe('GET /api/v1/orders', () => {
  it('should return a success status', async function() {
    const res = await chai.request(App)
      .get('/api/v1/orders')
      .set('Authorization',  `Bearer ${token}`);

    res.should.have.status(200);
  });

  it('should return a success status as customer', async function() {
    const res = await chai.request(App)
      .get('/api/v1/orders')
      .set('Authorization',  `Bearer ${customerToken}`);

    res.should.have.status(200);
  });
});