import React from 'react';
import LoadMoreButton from '../../../../../src/components/Home/MenuPeep/DisplayMeals/LoadMore/LoadMoreButton';

describe('LoadMoreButton component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<LoadMoreButton />);

    expect(wrapper).toMatchSnapshot();
  });
});