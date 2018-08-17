import React from 'react';
import PropTypes from 'prop-types';
import styles from './meal-form.scss';

const ModalButtons = ({ isSubmitting, handleSubmit, handleClose }) => (
  <div className={styles.btns}>
    <button
      type="button"
      disabled={isSubmitting ? 'disabled' : ''}
      className={styles.successBtn}
      onClick={handleSubmit}
    >
      {isSubmitting ? 'Please wait..' : 'Save'}
    </button>
    <button
      type="button"
      className={styles.closeModalBtn}
      onClick={handleClose}
    >
      Cancel
    </button>

  </div>
);

ModalButtons.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default ModalButtons;
