import React from 'react';
import MenuPeepContainer from '../../../../src/components/Home/MenuPeep/MenuPeepContainer';

describe('MenuPeepContainer component', () => {
  it('should render MenuPeep component', () => {
    const wrapper = mount(
      <Provider store={store} >
        <MenuPeepContainer />
      </Provider>
    );

    expect(wrapper.find('MenuPeep')).toHaveLength(1);
  });
});