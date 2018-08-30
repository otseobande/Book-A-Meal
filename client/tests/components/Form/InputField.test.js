import React from 'react';
import InputField from '../../../src/components/Form/InputField.js';

describe("InputField component", () => {
  it("should match snapshot", () => {
    const wrapper = shallow(
      <InputField
        errors={{}}
        touched={{}}
        values={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  })
})