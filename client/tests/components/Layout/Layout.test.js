import React from 'react';
import Layout from '../../../src/components/Layout/Layout.js';

describe('Layout component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper).toMatchSnapshot();
  })
})