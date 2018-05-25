import {
  chai,
  App,
  token
} from '../setup';

describe('/api/v1/logs', () => {
  it('should return a status 200', async () => {
    const res = await chai.request(App)
      .post('/api/v1/logs')
      .send({
        data: 'test log data'
      });

    res.should.have.status(200);
    res.body.should.deep.equal({
      status: 'success',
      message: 'Log saved successfully'
    });
  });
  it('should return status 400 if data is not provided', async () => {
    const res = await chai.request(App)
      .post('/api/v1/logs')
      .send({});

    res.should.have.status(400);
  });
});
