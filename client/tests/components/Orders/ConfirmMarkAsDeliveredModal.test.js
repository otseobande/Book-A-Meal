import React from 'react';
import ConfirmMarkAsDeliveredModal from '../../../src/components/Orders/ConfirmMarkAsDeliveredModal';

const props = {
  isOpen: false,
  handleClose: jest.fn(),
  deliverOrder: jest.fn(),
  orderId: 'dae2dfsdf'
}
describe('ConfirmMarkAsDeliveredModal component', () => {
  const wrapper = shallow(
    <ConfirmMarkAsDeliveredModal {...props} />
  );

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('deliverOrder method', () => {
    it('should call deliverOrder prop function with orderId from prop', () => {
      wrapper.instance().deliverOrder();

      expect(props.deliverOrder).toBeCalledWith(props.orderId);
    })
  });
});