import React from 'react';
import MenuCard from '../../../../../src/components/Menus/ManageMenus/MenuCard/MenuCard';

const props = {
  menu: {
    date: '2018-01-20',
    categories:[{
      title: 'test',
      meals: [{
        id: 'test-id',
        title: 'party rice',
        price: 300,
        img: 'image.png'
      }]
    }]
  },
  deleteMenu: jest.fn()
}
describe('MenuCard component', () => {
  const wrapper = shallow(
    <MenuCard
      {...props}
    />
  );

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('openDeleteModal method', () => {
    wrapper.instance().openDeleteModal();
    const { deleteModalOpen } = wrapper.instance().state;

    expect(deleteModalOpen).toBeTruthy();
  })
  describe('closeDeleteModal method', () => {
    wrapper.instance().closeDeleteModal();
    const { deleteModalOpen } = wrapper.instance().state;

    expect(deleteModalOpen).toBeFalsy();
  })
  describe('openEditModal method', () => {
    wrapper.instance().openEditModal();
    const { editModalOpen } = wrapper.instance().state;

    expect(editModalOpen).toBeTruthy();
  })
  describe('closeEditModal method', () => {
    wrapper.instance().closeEditModal();
    const { editModalOpen } = wrapper.instance().state;

    expect(editModalOpen).toBeFalsy();
  })
})