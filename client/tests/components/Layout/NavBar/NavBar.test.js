import React from 'react';
import NavBar from '../../../../src/components/Layout/NavBar/NavBar';

describe('NavBar component', () => {
  const props = {
    home: true,
    loggedIn: true,
    logout: jest.fn(),
    pathname: '/test',
    user: {
      id: 'test-id',
      name: 'Otse Obande',
      email: 'otseobande@gmail.com',
      username: 'otseobande'
    }
  }
  it('should match snapshot if loggedIn props is true', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavBar
          {...props}
          loggedIn={true}
        />
      </MemoryRouter>
    );
    const navBarWrapper = wrapper.find('NavBar');

    expect(navBarWrapper).toMatchSnapshot();
  });

  it('should match snapshot if loggedIn props is false', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavBar
          {...props}
          loggedIn={false}
        />
      </MemoryRouter>
    );
    const navBarWrapper = wrapper.find('NavBar');

    expect(navBarWrapper).toMatchSnapshot();
  });

  it('should match snapshot if state.isNavMenuVisible is true', () => {
    const wrapper = mount(
      <MemoryRouter>
        <NavBar
          {...props}
          loggedIn={false}
        />
      </MemoryRouter>
    );
    const navBarWrapper = wrapper.find('NavBar');

    navBarWrapper.instance().setState({isNavMenuVisible: true});

    expect(navBarWrapper).toMatchSnapshot();
  });

  describe('toggleMenu method', () => {
    it('should toggle isNavMenuVisible when called', () => {
      const wrapper = mount(
        <MemoryRouter>
          <NavBar
            {...props}
            loggedIn={false}
          />
        </MemoryRouter>
      );
      const navBarWrapper = wrapper.find('NavBar');

      navBarWrapper.instance().setState({ isNavMenuVisible: false });
      navBarWrapper.instance().toggleMenu();
      
      expect(navBarWrapper.instance().state.isNavMenuVisible).toBeTruthy();
      navBarWrapper.instance().toggleMenu();
      expect(navBarWrapper.instance().state.isNavMenuVisible).toBeFalsy();
    });
  });
});