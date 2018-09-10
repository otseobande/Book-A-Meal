import React from 'react';
import CatererLinks from '../../../../src/components/Layout/NavBar/CatererLinks';

describe('CatererLink component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<CatererLinks />);

    expect(wrapper).toMatchSnapshot();
  })
});