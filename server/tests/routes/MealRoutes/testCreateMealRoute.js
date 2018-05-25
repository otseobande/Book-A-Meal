import {
  chai,
  App,
  adminToken
} from '../../setup';

describe('POST /api/v1/meals', () => {
  it('should return a success status', async () => {
    const res = await chai.request(App)
      .post('/api/v1/meals')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'test meal',
        description: 'great meal',
        price: 500,
        img: 'image_link'
      });

    res.should.have.status(201);
  });

  it('should return an if a user tries creating a meal twice', async () => {
    const res = await chai.request(App)
      .post('/api/v1/meals')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'test meal',
        description: 'great meal',
        price: 500,
        img: 'image_link'
      });

    res.should.have.status(409);
    res.body.should.be.deep.equal({
      status: 'error',
      message: 'Meal already exists'
    });
  });


  it('malformed request should return error 400', async () => {
    const res = await chai.request(App)
      .post('/api/v1/meals')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'test meal'
      });

    res.should.have.status(400);
  });
});
