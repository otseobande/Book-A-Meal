import {
  App,
  chai
} from '../../setup';

describe('POST /api/v1/auth/login', function() {
  it('should return a success status', async function() {
    try {
      const res = await chai.request(App)
        .post('/api/v1/auth/login')
        .send({
            username: 'otseobande',
            password: 'bookameal'
        });

      res.should.have.status(200);
    } catch (err) {
        console.log(err.stack);
    }
  });

  it('should return error if credentials are wrong', async function() {
    try {
      const res = await chai.request(App)
        .post('/api/v1/auth/login')
        .send({
            username: 'otseobande',
            password: 'sdf'
        });

      res.should.have.status(422);
      res.message.should.be.equal('Please check your credentials');
    } catch (err) {
        console.log(err.stack);
    }
  });

  it('malformed request should return error 400', async function() {
      try {
        const res = await chai.request(App)
          .post('/api/v1/auth/login')
          .send({
              username: 'dogo',
          });

        res.should.have.status(422);
      } catch (err) {
        console.log(err.stack);
      }
  });
});