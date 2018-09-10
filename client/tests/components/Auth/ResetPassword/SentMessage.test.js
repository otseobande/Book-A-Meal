import React from 'react';
import SentMessage from '../../../../src/components/Auth/ResetPassword/SentMessage';

describe('SentMessage component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SentMessage />);

    expect(wrapper).toMatchSnapshot();
  })
})