import React from 'react';
import MenuPeep from '../../../../src/components/Home/MenuPeep/MenuPeep';

describe('MenuPeep component', () => {
  const props = {
    meals: [],
    peepMenus: jest.fn(),
    loading: false,
    loggedIn: true
  }
  it('should match snapshot if loading is false', () => {
    const wrapper = shallow(
      <MenuPeep
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if loading is true', () => {
    const wrapper = shallow(<MenuPeep
      {...props}
      loading={true}
    />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should call peepMenu prop function on mount', () => {
    const wrapper = shallow(
      <MenuPeep
        {...props}
      />
    );

    wrapper.instance().componentDidMount();
    expect(props.peepMenus).toBeCalled();
  });
});