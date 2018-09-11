import React from 'react';
import ConfirmCancelOrderModal from '../../../src/components/Orders/ConfirmCancelOrderModal';

const props = {
  isOpen: false,
  handleClose: jest.fn(),
  orderId: 'df23efs',
  handleCancelOrder: jest.fn()
}
describe('ConfirmCancelOrderModal component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ConfirmCancelOrderModal
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleCancel method', () => {
    const wrapper = shallow(
      <ConfirmCancelOrderModal
        {...props}
      />
    );
    wrapper.instance().handleCancel();
    it('should call handleCancelOrder prop function with orderId', () => {
      expect(props.handleCancelOrder).toBeCalledWith(props.orderId)
    });
    it('should call handleClose prop function', () => {
      expect(props.handleClose).toBeCalled();
    });
  });
});