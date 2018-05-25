import {
  chai,
  App,
  adminToken
} from '../../setup';


describe('PUT /api/v1/orders/:orderId/deliver', () => {
  it('should return a success status 200', async () => {
    const res = await chai.request(App)
      .put('/api/v1/orders/d161e8e8-eed0-4869-bcf1-4679289d940c/deliver')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(200);
    res.body.status.should.equal('success');
    res.body.message.should.equal('Order delivered successfully');
    res.body.order.should.be.an('object');
    res.body.order.status.should.equal('delivered');
  });

  it('should return a success status 404 if order is not found', async () => {
    const res = await chai.request(App)
      .put('/api/v1/orders/067411a2-23c9-4ce9-b8b6-dff4bb34e03f/deliver')
      .set('Authorization', `Bearer ${adminToken}`);

    res.should.have.status(404);
    res.body.should.deep.equal({
      status: 'error',
      message: 'Order not found'
    });
  });
});
