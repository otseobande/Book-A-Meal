import React from 'react';
import ResetPassword from '../../../../src/components/Auth/ResetPassword/ResetPassword';

describe('ResetPassword component', () => {
  it('should match snapshot if mailSent is true', () => {
    const wrapper = shallow(<ResetPassword mailSent={true} />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if mailSent is false', () => {
    const wrapper = shallow(<ResetPassword mailSent={false} />);

    expect(wrapper).toMatchSnapshot();
  });
});