import {
  chai,
  App,
  token
} from '../../setup';

import {order} from '../../../models';

describe('PUT /api/v1/orders/:orderId/deliver', function() {
  it('should return a success status 200', async function() {
    const res = await chai.request(App)
      .put('/api/v1/orders/d161e8e8-eed0-4869-bcf1-4679289d940c/deliver')
      .set('Authorization',  `Bearer ${token}`)
      
    res.should.have.status(200);
    res.body.status.should.equal('success');
    res.body.message.should.equal('Order delivered successfully');
    res.body.order.should.be.an('object');
    res.body.order.status.should.equal('delivered');
  });
});