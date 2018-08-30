import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactModal from 'react-modal';
import MenuDetailsForm from './MenuDetailsForm.js';
import styles from './set-menu.scss';

const SetMenuModal = ({
  isOpen, handleClose, setMenu, meals
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={handleClose}
    overlayClassName="react-modal-overlay"
    className={classnames('react-modal-body', styles.modal)}
    closeTimeoutMS={150}
  >
    <MenuDetailsForm
      closeModal={handleClose}
      handleSave={setMenu}
      meals={meals}
    />
  </ReactModal>
);

SetMenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setMenu: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SetMenuModal;
