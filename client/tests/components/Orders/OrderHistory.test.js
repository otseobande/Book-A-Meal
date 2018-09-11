import React from 'react';
import OrderHistory from '../../../src/components/Orders/OrderHistory';

const props = {
  fetchOrderHistory: jest.fn(),
  orders: [],
  isFetching: false,
  cancelOrder: jest.fn(),
  updateOrder: jest.fn(),
  paginationDetails: {
    currentPage: 1,
    pageCount: 1
  }
}
describe('OrderHistory component', () => {
  it('should match snapshot if orders array is empty', () => {
    const wrapper = shallow(
      <OrderHistory {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if orders array is not empty', () => {
    const wrapper = shallow(
      <OrderHistory
        {...props}
        orders={[{}]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchOrderHistory on component mount', () => {
    const wrapper = shallow(
      <OrderHistory {...props}/>
    );
    const instance = wrapper.instance();
    instance.componentDidMount();
    expect(props.fetchOrderHistory).toBeCalled();
  });

  describe('handlePageClick method', () => {
    const wrapper = shallow(
      <OrderHistory {...props}/>
    );

    const data = {
      selected: 1
    };

    const instance = wrapper.instance();
    instance.handlePageClick(data);
    expect(props.fetchOrderHistory).toBeCalledWith({
      page: data.selected + 1,
      limit: 10
    });
  });
});