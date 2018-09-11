import React from 'react';
import DisplayOrderHistoryTable from '../../../src/components/Orders/DisplayOrderHistoryTable';

const props = {
  orders: [],
  isFetching: true,
  cancelOrder: jest.fn(),
  updateOrder: jest.fn()
};

describe('DisplayOrderHistoryTable component', () => {
  it('should match snapshot if isFetching is true', () => {
    const wrapper = shallow(
      <DisplayOrderHistoryTable {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if isFetching is false', () => {
    const wrapper = shallow(
      <DisplayOrderHistoryTable
        {...props}
        isFetching={false}
        orders={[{
          id: '32rdsfafase'
        }]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});