import React from 'react';
import PageNotFound from '../../src/components/PageNotFound/PageNotFound';

describe('PageNotFound component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PageNotFound />);

    expect(wrapper).toMatchSnapshot();
  })
})