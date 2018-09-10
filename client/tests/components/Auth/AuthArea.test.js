import React from 'react';
import AuthArea from '../../../src/components/Auth/AuthArea';

describe('AuthArea component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<AuthArea />);

    expect(wrapper).toMatchSnapshot();
  })
})