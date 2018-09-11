import React from 'react';
import DisplayMeals from '../../../../../src/components/Home/MenuPeep/DisplayMeals/DisplayMeals';

describe('DisplayMeals component', () => {
  it('should match snapshot if meals array is empty', () => {
    const wrapper = shallow(
      <DisplayMeals
        meals={[]}
        loggedIn={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if logged is false', () => {
    const meals = [{
      id: 'test-id',
      title: 'Rice and beans'
    }]
    const wrapper = shallow(
      <DisplayMeals
        meals={meals}
        loggedIn={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if meals array is not empty', () => {
    const meals = [{
      id: 'test-id',
      title: 'Rice and beans'
    }]
    const wrapper = shallow(
      <DisplayMeals
        meals={meals}
        loggedIn={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });


  it('should match snapshot if visibleMeals is less than meal length', () => {
    const meals = [{
      id: 'test-id',
      title: 'Rice and beans'
    }]
    const wrapper = shallow(
      <DisplayMeals
        meals={meals}
        loggedIn={true}
      />
    );
    wrapper.instance().setState({ visibleMeals: 0 });

    expect(wrapper).toMatchSnapshot();
  });

  describe('displayMore method', () => {
    it('should increase visibleMeals in state by 4 when called', () => {
      const wrapper = shallow(
        <DisplayMeals
          meals={[]}
          loggedIn={true}
        />
      );
      const prevState = wrapper.instance().state;
      wrapper.instance().displayMore();
      const newState = wrapper.instance().state;
      expect(newState.visibleMeals).toEqual(prevState.visibleMeals + 4)
    })
  })
});