import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import EditMealFormContainer from './EditMealFormContainer.js';

/**
 * @class AddMealModal
 */
const EditMealModal = ({ isOpen, handleClose, meal }) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={handleClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-body"
    closeTimeoutMS={150}
  >
    <EditMealFormContainer
      handleClose={handleClose}
      meal={meal}
    />
  </ReactModal>
);

EditMealModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  meal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default EditMealModal;
