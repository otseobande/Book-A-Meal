import React from 'react';
import CatererOrderHistoryContainer from '../../../src/components/Orders/CatererOrderHistoryContainer';

describe('CatererOrderHistoryContainer component', () => {
  it('should render CatererOrderHistory component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CatererOrderHistoryContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('CatererOrderHistory')).toBeTruthy();
  });
});