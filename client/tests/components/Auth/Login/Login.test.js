import React from 'react';
import Login from '../../../../src/components/Auth/Login/Login';

describe('Login component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper).toMatchSnapshot();
  })
})