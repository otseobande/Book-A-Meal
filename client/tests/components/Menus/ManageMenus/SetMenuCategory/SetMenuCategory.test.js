import React from 'react';
import SetMenuCategory from '../../../../../src/components/Menus/ManageMenus/SetMenuCategory/SetMenuCategory';

const props = {
  meals: [],
  removeCategory: jest.fn(),
  categoryCount: 1,
  category: {
    meals: [],
    title: ''
  },
  toggleMealInCategory: jest.fn(),
  handleCategoryTitleChange: jest.fn(),
  selectedTitles: [],
  errors: {},
  categoryIndex: 0
};

describe('SetMenuCategory components', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <SetMenuCategory {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  })
});