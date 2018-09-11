import React from 'react';
import SignUp from '../../../../src/components/Auth/SignUp/SignUp';

describe('SignUp component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SignUp />);

    expect(wrapper).toMatchSnapshot();
  });
});