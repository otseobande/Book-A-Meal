import {
  chai,
  App
} from '../../setup';

describe('POST /api/v1/users/reset_password', () => {
  it('should return a success status', async () => {
    const res = await chai.request(App)
      .post('/api/v1/users/reset_password')
      .send({
        email: 'mealbooker@gmail.com'
      });

    res.should.have.status(202);
    res.body.should.be.deep.equal({
      status: 'success',
      message: 'Reset password link would be sent to your email shortly.'
    })
  });


  it('malformed request should return error 400', async () => {
    const res = await chai.request(App)
      .post('/api/v1/users/reset_password')
      .send({
        email: 'sdfiocn',
      });

    res.should.have.status(400);
  });
});
