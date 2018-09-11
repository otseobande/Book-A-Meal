import React from 'react';
import ManageMenus from '../../../../src/components/Menus/ManageMenus/ManageMenus';

const props = {
  getMenus: jest.fn(),
  getMeals: jest.fn(),
  menus: [],
  isFetching: true,
  pagination: {
    currentPage: 1
  }
}

describe('ManageMenus component', () => {
  it('should match snapshot if isFetching is true or menus array is empty', () => {
    const wrapper = shallow(
      <ManageMenus {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if isFetching is true and menus array is not empty', () => {
    const wrapper = shallow(
      <ManageMenus
        {...props}
        isFetching={false}
        menus={[{}]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call getMenus and getMeals prop function on mount', () => {
    const wrapper = shallow(
      <ManageMenus {...props}/>
    );

    expect(props.getMeals).toBeCalled();
    expect(props.getMenus).toBeCalled();
  });

  describe('closeMenuModal method', () => {
    const wrapper = shallow(
      <ManageMenus {...props}/>
    );

    it('should change setMenuModalOpen to false', () => {
      wrapper.instance().closeMenuModal();
      const { setMenuModalOpen } = wrapper.instance().state;

      expect(setMenuModalOpen).toBeFalsy();
    })
  })
  describe('openMenuModal method', () => {
    const wrapper = shallow(
      <ManageMenus {...props}/>
    );

    it('should change setMenuModalOpen to true', () => {
      wrapper.instance().openMenuModal();
      const { setMenuModalOpen } = wrapper.instance().state;

      expect(setMenuModalOpen).toBeTruthy();
    })
  })
});