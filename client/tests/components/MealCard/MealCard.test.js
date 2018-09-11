import React from 'react';
import MealCard from '../../../src/components/MealCard/MealCard';

const meal = {
  img: 'picture.jpg',
  title: 'ewedu',
  description: 'adsasdfs',
  price: 3900
};

describe('MealCard component', () => {
  const cardWrapper = shallow(
    <MealCard
      meal={meal}
    />
  );

  it('should match snapshot if action prop is edit', () => {
    const wrapper = shallow(
      <MealCard
        meal={meal}
        action="edit"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if action prop is order', () => {
    const wrapper = shallow(
      <MealCard
        meal={meal}
        action="order"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('openOrderModal method', () => {
    it('should set orderModalOpen state to true when called', () => {
      cardWrapper.instance().openOrderModal();

      const state = cardWrapper.instance().state;

      expect(state.orderModalOpen).toBeTruthy();
    });
  });

  describe('closeOrderModal method', () => {
    it('should set orderModalOpen state to false when called', () => {
      cardWrapper.instance().closeOrderModal();

      const state = cardWrapper.instance().state;

      expect(state.orderModalOpen).toBeFalsy();
    });
  });

  describe('openDeleteModal method', () => {
    it('should set deleteModalOpen state to true when called', () => {
      cardWrapper.instance().openDeleteModal();

      const state = cardWrapper.instance().state;

      expect(state.deleteModalOpen).toBeTruthy();
    });
  });

  describe('closeDeleteModal method', () => {
    it('should set orderModalOpen state to false when called', () => {
      cardWrapper.instance().closeDeleteModal();

      const state = cardWrapper.instance().state;

      expect(state.deleteModalOpen).toBeFalsy();
    });
  });

  describe('openEditModal method', () => {
    it('should set editModalOpen state to true when called', () => {
      cardWrapper.instance().openEditModal();

      const state = cardWrapper.instance().state;

      expect(state.editModalOpen).toBeTruthy();
    });
  });

  describe('closeEditModal method', () => {
    it('should set editModalOpen state to false when called', () => {
      cardWrapper.instance().closeEditModal();

      const state = cardWrapper.instance().state;

      expect(state.editModalOpen).toBeFalsy();
    });
  });

  describe('closeEditModal method', () => {
    it('should set editModalOpen state to false when called', () => {
      cardWrapper.instance().closeEditModal();

      const state = cardWrapper.instance().state;

      expect(state.editModalOpen).toBeFalsy();
    });
  });

  describe('handleDelete method', () => {
    it('should call deleteMeal prop function with meal', () => {
      const props = {
        deleteMeal: jest.fn(),
        meal
      };

      const wrapper = shallow(
        <MealCard
          {...props}
        />
      );

      wrapper.instance().handleDelete();

      expect(props.deleteMeal).toBeCalledWith(props.meal)
    });
  })
});