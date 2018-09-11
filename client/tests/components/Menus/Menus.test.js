import React from 'react';
import Menus from '../../../src/components/Menus/Menus';

describe('Menus component', () => {
  const props = {
    getMenusForTheDay: jest.fn(),
    menus:[],
    loading: false,
    loggedIn: false
  }

  it('should match snapshot if loading is false', () => {
    const wrapper = shallow(
      <Menus
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot if loading is true', () => {
    const wrapper = shallow(
      <Menus
        {...props}
        loading={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
});