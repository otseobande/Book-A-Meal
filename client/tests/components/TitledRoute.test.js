import React from 'react';
import TitledRoute from '../../src/components/TitledRoute';

describe('TitledRoute component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<TitledRoute />);

    expect(wrapper).toMatchSnapshot();
  })
})