import React from 'react';
import EditMealModal from '../../../../src/components/MealCard/EditMealModal/EditMealModal';

describe('EditMealModal component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <EditMealModal />
    );

    expect(wrapper).toMatchSnapshot();
  });
});