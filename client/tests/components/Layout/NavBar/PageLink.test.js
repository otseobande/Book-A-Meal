import React from 'react';
import PageLink from '../../../../src/components/Layout/NavBar/PageLink';

describe('PageLink component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PageLink to="test" />);

    expect(wrapper).toMatchSnapshot();
  })
})