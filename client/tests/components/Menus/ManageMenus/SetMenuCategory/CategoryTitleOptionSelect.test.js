import React from 'react';
import CategoryTitleOptionsSelect from '../../../../../src/components/Menus/ManageMenus/SetMenuCategory/CategoryTitleOptionsSelect';

const props = {
  selectedTitles: [],
  handleChange: jest.fn(),
  value: '',
  removeCategory: jest.fn(),
  categoryCount: 1,
  errors: {'categories[0].title': 'error'},
  categoryIndex: 0
}
describe('CategoryTitleOptionSelect component', () => {
  it('should match snapshot if category count is 1 and errors exist', () => {
    const wrapper = shallow(
      <CategoryTitleOptionsSelect {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if category count greater than 1 and errors dont exist', () => {
    const wrapper = shallow(
      <CategoryTitleOptionsSelect
        {...props}
        errors={{}}
        categoryCount={2}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
});