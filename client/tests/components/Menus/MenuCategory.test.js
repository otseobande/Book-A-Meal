import React from 'react';
import MenuCategory from '../../../src/components/Menus/MenuCategory';
import { wrap } from 'module';

const category = {
  meals: [{
    id: 'test-id',
    title: 'fufu and egusi',
    price: 230,
    img: 'fufu.jpg'
  }]
};

describe('MenuCategory component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MenuCategory
        category={category}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});