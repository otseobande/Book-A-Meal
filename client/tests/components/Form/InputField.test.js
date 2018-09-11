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
  });

  it('should match snapshot on error', () => {
    const wrapper = shallow(<InputField
      errors={{ testInput: 'name is required'}}
      touched={{ testInput: true }}
      name='testInput'
      values={{ testInput: ''}}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})