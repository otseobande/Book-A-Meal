import React from 'react';
import MealFormButtons from '../../../../src/components/Meals/MealForm/MealFormButtons';

describe('MealFormButtons component', () => {
  it('should match screenshot if isSubmitting is true', () => {
    const wrapper = shallow(
      <MealFormButtons
        isSubmitting={true}
        handleClose={() => {}}
        handleDelete={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match screenshot if isSubmitting is false', () => {
    const wrapper = shallow(
      <MealFormButtons
        isSubmitting={false}
        handleClose={() => {}}
        handleDelete={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});