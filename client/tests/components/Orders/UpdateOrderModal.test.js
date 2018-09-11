import React from 'react';
import UpdateOrderModal from '../../../src/components/Orders/UpdateOrderModal';

const props = {
  isOpen: false,
  handleClose: jest.fn(),
  handleUpdateOrder: (orderId, orderDetails) => Promise.resolve([orderId, orderDetails]),
  order: {
    id: 'asdf23e',
    meal: {
      id: 'af328d',
      img: 'picture.jpg',
      title: 'garri and sugar',
      description: 'Garri and sugar with enough water',
      price: 230
    },
    deliveryAddress: 'adf23 sadf829e3r',
    phoneNumber: '08123324234',
    quantity: 2
  }
}
describe('UpdateOrderModal component', () => {
  const wrapper = shallow(
    <UpdateOrderModal {...props} />
  );

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClose method', () => {
    wrapper.instance().handleClose();

    it('should set updateOrderRequestIsProcessing is false', () => {
      const { updateOrderRequestIsProcessing } = wrapper.instance().state;

      expect(updateOrderRequestIsProcessing).toBeFalsy();
    });

    it('should call handleClose function from prop', () => {
      expect(props.handleClose).toBeCalled();
    });
  });

  describe('updateOrder method', () => {
    it('should set updateOrderRequestIsProcessing to true', async () => {
      const orderDetails = { id: 'tdf82fsadf'};
      const action = wrapper.instance();

      action.updateOrder(orderDetails);
      const { updateOrderRequestIsProcessing } = wrapper.state();

      expect(updateOrderRequestIsProcessing).toBeTruthy();
    });
  });
});