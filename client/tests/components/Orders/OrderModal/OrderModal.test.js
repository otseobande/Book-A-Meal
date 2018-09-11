import React from 'react';
import OrderModal from '../../../../src/components/Orders/OrderModal/OrderModal';

const props = {
  meal: {
    id: 'adf92d',
    img: 'picture.png',
    title: 'rice and stew',
    description: 'white rice and stew',
    price: 3289
  },
  isOpen: false,
  handleClose: jest.fn()
}
describe('OrderModal component', () => {
  const wrapper = shallow(
    <OrderModal
      {...props}
    />
  );
  it('should match snapshot if orderSuccessful is false', () => {
    wrapper.instance().setState({ orderSuccessful: false });

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if orderSuccessful is true', () => {
    wrapper.instance().setState({ orderSuccessful: true });

    expect(wrapper).toMatchSnapshot();
  });

  describe('placeOrder method', () => {
    wrapper.instance().placeOrder({});

    it('should set orderRequestIsProcessing to false', () => {
      const { orderRequestIsProcessing } = wrapper.instance().state;

      expect(orderRequestIsProcessing).toBeFalsy();
    })
    it('should set orderSuccessful to true', () => {
      const { orderSuccessful } = wrapper.instance().state;

      expect(orderSuccessful).toBeTruthy();
    })
  })
});