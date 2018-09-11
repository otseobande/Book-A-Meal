import React from 'react';
import MenusContainer from '../../../src/components/Menus/MenusContainer';

describe('MenusContainer component', () => {
  it('should render Menus component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <MenusContainer />
        </MemoryRouter>
      </Provider>

    );

    expect(wrapper.find('Menus')).toBeTruthy();
  });
});