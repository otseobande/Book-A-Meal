import React from 'react';
import EditMenuModalContainer from '../../../../../src/components/Menus/ManageMenus/MenuCard/EditMenuModalContainer';

describe('EditMenuModalContainer component', () => {
  it('should render EdiMenuModal component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <EditMenuModalContainer />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find('EditMenuModal')).toBeTruthy();
  })
});