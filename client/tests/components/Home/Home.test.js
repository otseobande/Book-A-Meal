import React from 'react';
import Home from '../../../src/components/Home/Home';

describe('Home component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  })
})