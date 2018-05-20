import {
  chai,
  App,
  token
} from '../../setup';

describe('POST /api/v1/orders', () => {
  it('should return a status 200 and success message', async function() {
    const res = await chai.request(App)
      .post('/api/v1/orders')
      .set('Authorization',  `Bearer ${token}`)
      .send({
          mealId: '64c45c00-ed18-44b7-862a-f12d0481696c',
          quantity: 3,
          status: 'pending',
          phoneNumber: '08131928452',
          deliveryAddress: 'rahama road',
      });

    res.should.have.status(200);
    res.body.should.have.property('status');
    res.body.should.have.property('message');
  });

  it('should return a status 400 and error message if meal not found', async function() {
    const res = await chai.request(App)
      .post('/api/v1/orders')
      .set('Authorization',  `Bearer ${token}`)
      .send({
        mealId: '64c49c00-ed18-44b7-862a-f12d0481696c',
        quantity: 3,
        status: 'pending',
        phoneNumber: '08131928452',
        deliveryAddress: 'rahama road',
      });

    res.should.have.status(404);
    res.body.should.be.deep.equal({
      status: 'error',
      message: 'Meal does not exist'
    })
  });
});