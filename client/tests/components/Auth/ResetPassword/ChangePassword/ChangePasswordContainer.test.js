import React from 'react';
import ChangePasswordContainer from '../../../../../src/components/Auth/ResetPassword/ChangePassword/ChangePasswordContainer';

describe('ChangePasswordContainer component', () => {
  it('should render ChangePassword component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ChangePasswordContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('ChangePassword')).toBeTruthy();
  });
});