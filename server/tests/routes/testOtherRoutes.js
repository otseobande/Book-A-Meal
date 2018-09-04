import {
  chai,
  App,
  token
} from '../setup';

describe('non-api routes', () => {
  it('should send a success at /', async () => {
    const res = await chai.request(App)
      .get('/');
    res.should.have.status(200);
  });

  it('/assets should serve assets', async () => {
    const res = await chai.request(App)
      .get('/assets/img/logo-white.svg');
    res.should.have.status(200);
  });

  it('should send 404 for other methods on /', async () => {
    const res = await chai.request(App)
      .post('/');
    res.should.have.status(404);
    res.body.should.be.deep.equal({
      status: 'error',
      message: 'Route not found'
    })
  })
});
