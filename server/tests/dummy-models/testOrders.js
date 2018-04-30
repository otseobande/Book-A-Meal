import chai from 'chai';
import orders from '../../dummy-models/orders';

chai.should();

describe('Dummy orders data', () => {

  it('should have correct properties', () => {
    const orderData = orders.data[0];
    orderData.should.have.property('id');
    orderData.should.have.property('userId');
    orderData.should.have.property('mealId');
    orderData.should.have.property('quantity');
    orderData.should.have.property('status');
    orderData.should.have.property('deliveryAddress');
  });
});
