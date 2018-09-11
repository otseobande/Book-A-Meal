import React from 'react';
import OrderSuccessful from '../../../../src/components/Orders/OrderModal/OrderSuccessful';

describe('OrderSuccessful component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <OrderSuccessful
        handleClose={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});