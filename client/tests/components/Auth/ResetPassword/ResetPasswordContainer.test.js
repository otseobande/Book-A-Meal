import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router'
import ResetPasswordContainer from '../../../../src/components/Auth/ResetPassword/ResetPasswordContainer';

describe('ResetPasswordContainer', () => {
  it('should render ResetPassword component', () => {
    const wrapper = mount(
      <Provider store={store} >
        <MemoryRouter>
          <ResetPasswordContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('ResetPassword')).toHaveLength(1);
  });
});