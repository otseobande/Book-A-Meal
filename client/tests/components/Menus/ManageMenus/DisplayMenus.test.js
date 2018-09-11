import React from 'react';
import DisplayMenus from '../../../../src/components/Menus/ManageMenus/DisplayMenus';

const props = {
  menus: [],
  getMenus: jest.fn(),
  pagination: {
    currentPage: 1
  }
}
describe('DisplayMenus component', () => {
  it('should match snapshot if menus are empty', () => {
    const wrapper = shallow(
      <DisplayMenus {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if menus are not empty', () => {
    const wrapper = shallow(
      <DisplayMenus
        {...props}
        menus={[1,2,3,4]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleLoadMore method', () => {
    const wrapper = shallow(
      <DisplayMenus
        {...props}
        menus={[1,2,3,4]}
      />
    );

    wrapper.instance().handleLoadMore();

    expect(props.getMenus).toBeCalledWith({
      limit: 10,
      page: props.pagination.currentPage + 1
    });
  });
});