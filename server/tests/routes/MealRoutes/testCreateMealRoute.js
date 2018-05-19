import {
  chai,
  App,
  token
} from '../../setup'

describe('POST /api/v1/meals', function() {
  it('should return a success status', async function() {
    const res = await chai.request(App)
      .post('/api/v1/meals')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          title: 'test meal',
          description: 'great meal',
          price: 500,
          img: 'image_link',
      });

    res.should.have.status(201);
     
  });

  it('should return an if a user tries creating a meal twice', async function() {
    const res = await chai.request(App)
      .post('/api/v1/meals')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          title: 'test meal',
          description: 'great meal',
          price: 500,
          img: 'image_link',
      });

    res.should.have.status(409);
    res.body.should.be.deep.equal({
      status: 'error',
      message: "Meal already exists"
    })
  });


  it('malformed request should return error 400', async function() {
    const res = await chai.request(App)
        .post('/api/v1/meals')
        .set('Authorization',  `Bearer ${token}`)
        .send({
            title: 'test meal',
        });

    res.should.have.status(400);
  });
});