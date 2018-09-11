import React from 'react';
import CatererOrderHistory from '../../../src/components/Orders/CatererOrderHistory';

const props = {
  fetchOrderHistory: jest.fn(),
  paginationDetails: {
    currentPage: 1,
    pageCount: 1
  },
  deliverOrder: jest.fn(),
  orders: []
}
describe('CatererOrderHistory component', () => {
  it('should match snapshot if orders array is empty', () => {
    const wrapper = shallow(
      <CatererOrderHistory {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if orders array is not empty', () => {
    const wrapper = shallow(
      <CatererOrderHistory
        {...props}
        orders={[
          {
            id: 'asdf23e',
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call fetchOrderHistory prop on mount', () => {
    const wrapper = shallow(
      <CatererOrderHistory {...props} />
    );

    wrapper.instance().componentDidMount();

    expect(props.fetchOrderHistory).toBeCalled();
  });

  describe('handlePageClick method', () => {
    it('should call fetchOrderHistory prop function with pagination details', () => {
      const wrapper = shallow(
        <CatererOrderHistory {...props} />
      );

      const data = {
        selected: 1
      }

      wrapper.instance().handlePageClick(data);

      expect(props.fetchOrderHistory).toBeCalledWith({
        page: data.selected + 1,
        limit: 10
      });
    });
  });

  describe('handleDeliver method', () => {
    it('should call deliver order prop function', () => {
      const wrapper = shallow(
        <CatererOrderHistory {...props} />
      );

      wrapper.instance().handleDeliver('fad');

      expect(props.deliverOrder).toBeCalledWith('fad');
    });
  });
});