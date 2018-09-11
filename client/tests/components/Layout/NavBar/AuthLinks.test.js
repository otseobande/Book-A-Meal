import React from 'react';
import AuthLinks from '../../../../src/components/Layout/NavBar/AuthLinks';

describe('AuthLinks component', () => {
  it('should match snapshot if role is customer', () => {
    const wrapper = shallow(
      <AuthLinks
        role="customer"
        pathname="test"
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot if role is not customer', () => {
    const wrapper = shallow(
      <AuthLinks
        role="caterer"
        pathname="test"
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
});