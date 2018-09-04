import {
  chai,
  App
} from '../../setup';

describe('POST /api/v1/auth/signup', () => {
  it('should return 201 after creation', async () => {
    const res = await chai.request(App)
      .post('/api/v1/auth/signup')
      .send({
        username: 'cookie',
        fullName: 'Sele Mege',
        email: 'cookie@gmail.com',
        password: 'bookameal',
        role: 'customer'
      });

    res.should.have.status(201);
  });


  it('malformed request should return error 400', async () => {
    const res = await chai.request(App)
      .post('/api/v1/auth/signup')
      .send({
        username: 'dogo',
        password: 'yaro'
      });

    res.should.have.status(400);
  });

  it('should return 409 with message if username is taken', async () => {
    const res = await chai.request(App)
      .post('/api/v1/auth/signup')
      .send({
        username: 'otseobande',
        fullName: 'Sele Mege',
        email: 'sfdele@gmail.com',
        password: 'bookameal',
        role: 'customer'
      });

    res.should.have.status(409);
    res.body.message[0].should.be.equal('username "otseobande" already exists');
  });

  it('should return 409 with message if email is taken', async () => {
    const res = await chai.request(App)
      .post('/api/v1/auth/signup')
      .send({
        username: 'otsande',
        fullName: 'Sele Mege',
        email: 'mealbooker@gmail.com',
        password: 'bookameal',
        role: 'customer'
      });

    res.should.have.status(409);
    res.body.message[0].should.be.equal('email "mealbooker@gmail.com" already exists');
  });

  it('should return 400 with message if role doesnt exist', async () => {
    const res = await chai.request(App)
      .post('/api/v1/auth/signup')
      .send({
        username: 'otsade',
        fullName: 'Sele Mege',
        email: 'otseobae@gmail.com',
        password: 'bookameal',
        role: 'saler'
      });

    res.should.have.status(400);
  });
});
