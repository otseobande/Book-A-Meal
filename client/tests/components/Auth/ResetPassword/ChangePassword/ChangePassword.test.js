import React from 'react';
import ChangePassword from '../../../../../src/components/Auth/ResetPassword/ChangePassword/ChangePassword';

describe('ChangePassword component', () => {
  it('should match snapshot if resetSuccessful is true', () => {
    const wrapper = shallow(
      <ChangePassword
        resetSuccessful={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if resetSuccessful is false', () => {
    const wrapper = shallow(
      <ChangePassword
        resetSuccessful={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});