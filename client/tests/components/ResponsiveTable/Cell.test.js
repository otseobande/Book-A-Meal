import React from 'react';
import Cell from '../../../src/components/ResponsiveTable/Cell';

describe('ResponsiveTable Cell component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Cell />);

    expect(wrapper).toMatchSnapshot();
  })
})