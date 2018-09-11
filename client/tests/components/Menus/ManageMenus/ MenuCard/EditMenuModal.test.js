import React from 'react';
import EditMenuModal from '../../../../../src/components/Menus/ManageMenus/MenuCard/EditMenuModal';

const props = {
  isOpen: false,
  handleClose: jest.fn(),
  changeMenu: jest.fn(),
  meals: [],
  date: '',
  categories: []
}
describe('EditMenuModal component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <EditMenuModal {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});