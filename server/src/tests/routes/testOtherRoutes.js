import {
  chai,
  App,
  token
} from '../setup';

describe('unspecified routes', () => {
  it('should send a welcome message at /', async () => {
    const res = await chai.request(App)
      .get('/');
    res.should.have.status(200);
  });
  it('should return error 404 if api route not found', async () => {
    const res = await chai.request(App)
      .get('/api/v1/kangaroo');
    res.should.have.status(404);
    res.body.should.be.deep.equal({
      status: 'error',
		  message: 'Route not found'
    });
  });
});
