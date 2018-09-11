import React from 'react';
import RemoveCategoryButton from '../../../../../src/components/Menus/ManageMenus/SetMenuCategory/RemoveCategoryButton';

describe('RemoveCategoryButton', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <RemoveCategoryButton
        handleRemoveCategory={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});