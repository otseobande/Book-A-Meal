import React from 'react';
import Loader from '../../src/components/Loader.js';

describe("Loader component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  })
})