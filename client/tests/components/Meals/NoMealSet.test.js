import React from 'react';
import NoMealSet from '../../../src/components/Meals/NoMealSet';

describe('NoMealSet component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <NoMealSet />
    );

    expect(wrapper).toMatchSnapshot();
  });
});