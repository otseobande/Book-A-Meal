import chai from 'chai';
import Orders from '../../dummy-models/orders';

chai.should();

describe('Dummy orders data', () => {
  it('should be an array', () => {
    Orders.should.be.an('array');
  });

  it('should have correct keys', () => {
    const order = Orders[0];
    order.should.have.keys('id','userId','mealId','quantity','deliveryAddress');
  });
});
