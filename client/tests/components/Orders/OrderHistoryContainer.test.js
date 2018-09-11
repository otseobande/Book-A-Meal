import React from 'react';
import OrderHistoryContainer from '../../../src/components/Orders/OrderHistoryContainer';

describe('OrderHistoryContainer component', () => {
  it('should render OrderHistory component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <OrderHistoryContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('OrderHistory')).toBeTruthy();
  });
});