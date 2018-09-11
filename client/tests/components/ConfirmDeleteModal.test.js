import React from 'react';
import ConfirmDeleteModal from '../../src/components/ConfirmDeleteModal/ConfirmDeleteModal';

describe('ConfirmDeleteModal component', () => {
  const props = {
    isOpen: false,
    handleClose: jest.fn(),
    handleDelete: jest.fn()
  }
  const wrapper = shallow(
    <ConfirmDeleteModal
      {...props}
    />
  );

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClose method', () => {
    beforeAll(() => {
      wrapper.instance().handleDelete();
    });
    it('should call handleClose prop functions', () => {
      expect(props.handleClose).toBeCalled();
    });
    it('should call handleDelete prop function', () => {
      expect(props.handleDelete).toBeCalled();
    })
  })
})