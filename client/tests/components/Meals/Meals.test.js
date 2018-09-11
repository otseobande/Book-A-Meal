import React from 'react';
import Meals from '../../../src/components/Meals/Meals';

const props = {
  meals: [],
  isFetching: false,
  getMeals: jest.fn(),
  pagination: {
    currentPage: 1
  }
};

describe('Meals component', () => {
  it('should match snapshot when isFetching is false', () => {
    const wrapper = shallow(
      <Meals
        {...props}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when isFetching is true and meals array is empty', () => {
    const wrapper = shallow(
      <Meals
        {...props}
        isFetching={true}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should call getMeals prop function with pagination info on mount', () => {
    const wrapper = shallow(
      <Meals
        {...props}
      />
    );

    expect(props.getMeals).toBeCalledWith({limit: 10, page: 1});
  });

  describe('openAddMealModal method', () => {
    const wrapper = shallow(
      <Meals
        {...props}
      />
    );
    it('should set addMealModalIsOpen to true when called', () => {
      wrapper.instance().openAddMealModal();
      const state = wrapper.instance().state;

      expect(state.addMealModalIsOpen).toBeTruthy();
    });
  });

  describe('closeAddMealModal method', () => {
    const wrapper = shallow(
      <Meals
        {...props}
      />
    );

    it('should set addMealModalIsOpen to false when called', () => {
      wrapper.instance().closeAddMealModal();
      const state = wrapper.instance().state;

      expect(state.addMealModalIsOpen).toBeFalsy();
    });
  });
});