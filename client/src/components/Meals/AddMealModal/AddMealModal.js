import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import AddMealFormContainer from './AddMealFormContainer.js';

/**
 * @class AddMealModal
 */
const AddMealModal = ({ isOpen, handleClose }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={handleClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-body"
    closeTimeoutMS={150}
  >
    <AddMealFormContainer
      handleClose={handleClose}
    />
  </ReactModal>
);

AddMealModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AddMealModal;
