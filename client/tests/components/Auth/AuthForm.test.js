import React from 'react';
import AuthForm from '../../../src/components/Auth/AuthForm';


describe('AuthForm component', () => {
  const props = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn()
  }

  it('should match snapshot if type prop is login', () => {
    const wrapper = shallow(
      <AuthForm
        type="login"
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
  it('should match snapshot if type prop is signup', () => {
    const wrapper = shallow(
      <AuthForm
        type="signup"
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
  it('should match snapshot if type prop is reset', () => {
    const wrapper = shallow(
      <AuthForm
        type="reset"
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
  it('should match snapshot if type prop is changepassword', () => {
    const wrapper = shallow(
      <AuthForm
        type="changepassword"
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot if type prop not given or is not valid', () => {
    const wrapper = shallow(
      <AuthForm
        type="test"
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
})