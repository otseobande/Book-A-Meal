import React from 'react';
import NoMenu from '../../src/components/Menus/ManageMenus/NoMenu';

describe('NoMenu component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NoMenu />);

    expect(wrapper).toMatchSnapshot();
  })
})