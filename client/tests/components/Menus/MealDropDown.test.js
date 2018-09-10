import React from 'react';
import MealDropDown from '../../../src/components/Menus/MealDropDown';

const meal = {
  id: 'test-id',
  title: 'fufu and egusi',
  price: 230,
  img: 'fufu.jpg'
};

describe('MealDropDown component', () => {
  const wrapper = shallow(
    <MealDropDown
      meal={meal}
    />
  );
  it('should match snapshot if droppedDown state is true', () => {
    wrapper.instance().setState({ droppedDown: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot if droppedDown state is false', () => {
    wrapper.instance().setState({ droppedDown: false });

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleOpenOrderModal', () => {
    const event = {
      stopPropagation: jest.fn()
    }
    const { handleOpenOrderModal } = wrapper.instance();
    it('should call stopPropagation on event', () => {
      handleOpenOrderModal(event);

      expect(event.stopPropagation).toBeCalled();
    });

    it('should set showOrderModal to true', () => {
      wrapper.instance().setState({ showOrderModal: false });
      handleOpenOrderModal(event);

      expect(wrapper.instance().state.showOrderModal).toBeTruthy();

    });
  });

   describe('handleCloseOrderModal', () => {
    const { handleCloseOrderModal } = wrapper.instance();

    it('should set showOrderModal to false', () => {
      wrapper.instance().setState({ showOrderModal: true });
      handleCloseOrderModal();

      expect(wrapper.instance().state.showOrderModal).toBeFalsy();
    });
  });

  describe('toggleDropDown method', () => {
    it('should toggle the droppedDown state of the component', () => {
      wrapper.instance().setState({ droppedDown: false});
      wrapper.instance().toggleDropDown();
      expect(wrapper.instance().state.droppedDown).toBeTruthy();
      wrapper.instance().toggleDropDown();
      expect(wrapper.instance().state.droppedDown).toBeFalsy();
    });
  });
});