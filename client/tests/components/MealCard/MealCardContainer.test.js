import React from 'react';
import MealCardContainer from '../../../src/components/MealCard/MealCardContainer';


const meal = {
  img: 'picture.jpg',
  title: 'ewedu',
  description: 'adsasdfs',
  price: 3900
};

describe('MealCardContainer component', () => {
  it('should render MealCard component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MealCardContainer meal={meal} />
      </Provider>
    );

    expect(wrapper.find('MealCard')).toBeTruthy();
  })
});