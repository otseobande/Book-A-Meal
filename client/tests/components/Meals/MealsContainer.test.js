import React from 'react';
import MealsContainer from '../../../src/components/Meals/MealsContainer';

describe('MealsContainer componenet', () => {
  it('should render Meals component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MealsContainer />
      </Provider>
    );

    expect(wrapper.find('Meals')).toBeTruthy();
  });
});