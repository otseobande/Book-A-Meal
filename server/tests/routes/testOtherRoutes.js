import {
  chai,
  App,
  token
} from '../setup';

describe('unspecified routes', () => {
  it('should send a success at /', async () => {
    const res = await chai.request(App)
      .get('/');
    res.should.have.status(200);
  });

});
