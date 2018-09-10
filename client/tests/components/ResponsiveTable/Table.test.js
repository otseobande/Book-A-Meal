import React from 'react';
import Table from '../../../src/components/ResponsiveTable/Table';

describe('ResponsiveTable Table component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Table />);

    expect(wrapper).toMatchSnapshot();
  })
})