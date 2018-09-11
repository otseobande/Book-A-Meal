import React from 'react';
import DisplayMealCards from '../../../src/components/Meals/DisplayMealCards';

describe('DisplayMealCards component', () => {
  it('should match snapshot if meal array is empty', () => {
    const wrapper = shallow(
      <DisplayMealCards
        meals={[]}
        getMeals={() => {}}
        pagination={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot if meal array is not empty', () => {
    const meals = [{
      id: 's324d-safd-da32',
      title: 'Beans and bread',
      img: 'picture.jpg',
      description: 'great meal'
    }]
    const wrapper = shallow(
      <DisplayMealCards
        meals={meals}
        getMeals={() => {}}
        pagination={{}}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleLoadMore method', () => {
    it('should call getMeals function from props with pagination info', () => {
      const getMeals = jest.fn();
      const wrapper = shallow(
        <DisplayMealCards
          getMeals={getMeals}
          meals={[]}
          pagination={{currentPage: 1}}
        />
      );

      wrapper.instance().handleLoadMore();
      expect(getMeals).toBeCalledWith({
        limit: 10,
        page: 2
      });
    })
  });
});