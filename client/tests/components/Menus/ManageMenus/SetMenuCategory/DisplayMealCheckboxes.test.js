import React from 'react';
import DisplayMealCheckboxes from '../../../../../src/components/Menus/ManageMenus/SetMenuCategory/DisplayMealCheckboxes';

const props = {
  meals: [],
  toggleMealInCategory: jest.fn(),
  categoryMealIds: [1],
  errors: {'categories[0].meals': 'error'},
  categoryIndex: 0
};

describe('DisplayMealCheckboxes component', () => {
  it('should match snapshot if error exists', () => {
    const wrapper = shallow(
      <DisplayMealCheckboxes {...props}/>
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if error doesnt exists', () => {
    const wrapper = shallow(
      <DisplayMealCheckboxes
        {...props}
        errors={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if meals are present', () => {
    const wrapper = shallow(
      <DisplayMealCheckboxes
        {...props}
        meals={[
          { id: 1, title: 'rice'},
          { id: 2, title: 'beans'}
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleCheck method', () => {
    const wrapper = shallow(
      <DisplayMealCheckboxes
        {...props}
        meals={[
          { id: 1, title: 'rice'},
          { id: 2, title: 'beans'}
        ]}
      />
    );
    it('should call toggleMealInCategory prop function', () => {
      const meal = { id: 1, title: 'rice'};
      wrapper.instance().handleCheck(meal)();

      expect(props.toggleMealInCategory).toBeCalledWith(meal);
    });
  });
});