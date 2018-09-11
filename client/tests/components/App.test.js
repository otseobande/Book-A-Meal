import React from 'react';
import App from '../../src/components/App';

describe('App component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});