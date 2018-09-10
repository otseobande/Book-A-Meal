import React from 'react';
import CustomerLinks from '../../../../src/components/Layout/NavBar/CustomerLinks';

describe('CustomerLinks component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CustomerLinks />);

    expect(wrapper).toMatchSnapshot();
  })
})