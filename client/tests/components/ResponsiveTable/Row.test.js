import React from 'react';
import Row from '../../../src/components/ResponsiveTable/Row';

describe('ResponsiveTable Row component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Row />);

    expect(wrapper).toMatchSnapshot();
  })
})