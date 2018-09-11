import React from 'react';
import ManageMenusContainer from "../../../../src/components/Menus/ManageMenus/ManageMenusContainer";

describe('ManageMenusContainer component', () => {
  it('should render ManageMenus component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ManageMenusContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('ManageMenus')).toBeTruthy();
  });
});