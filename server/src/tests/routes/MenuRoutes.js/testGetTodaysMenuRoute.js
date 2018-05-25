import {
  chai,
  App,
  adminToken
} from '../../setup';

describe('GET /api/v1/menu', () => {
  it('should return a success status', async () => {
    const res = await chai.request(App)
      .get('/api/v1/menu')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(200);
  });
});
