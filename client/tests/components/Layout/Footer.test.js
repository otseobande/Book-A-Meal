import React from 'react';
import Footer from '../../../src/components/Layout/Footer/Footer.js';

describe("Footer component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(<Footer />)

    expect(wrapper).toMatchSnapshot();
  })
})