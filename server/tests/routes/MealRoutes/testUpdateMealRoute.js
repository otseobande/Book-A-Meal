import {
  chai,
  App,
  adminToken
} from '../../setup';

describe('PUT /api/v1/meals/:mealId', () => {
  it('should return a success status 200', async () => {
    const res = await chai.request(App)
      .put('/api/v1/meals/df12bd22-3326-4929-9cd6-a3805db52ca5')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'test meal',
        description: 'great meal',
        price: 500,
        img: 'image_link'
      });

    res.should.have.status(200);
  });

  it('should return an error 404 if not found', async () => {
    const res = await chai.request(App)
      .put('/api/v1/meals/d161e8e8-eed0-4869-bcf1-4679289d940c')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({
        title: 'test meal',
        description: 'great meal',
        price: 500,
        img: 'image_link'
      });

    res.should.have.status(404);
    res.body.should.be.deep.equal({
      status: 'error',
      message: 'Meal not found'
    });
  });
});
