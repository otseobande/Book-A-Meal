import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactModal from 'react-modal';
import MenuDetailsForm from '../MenuDetailsForm.js';
import styles from '../set-menu.scss';

const EditMenuModal = ({
  isOpen,
  handleClose,
  editMenu,
  meals,
  date,
  categories
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
      handleSave={editMenu}
      meals={meals}
      date={date}
      categories={categories}
    />
  </ReactModal>
);

EditMenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  editMenu: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default EditMenuModal;
