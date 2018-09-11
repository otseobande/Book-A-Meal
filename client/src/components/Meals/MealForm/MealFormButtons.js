import React from 'react';
import PropTypes from 'prop-types';
import styles from './meal-form.scss';

const MealFormButtons = ({ isSubmitting, handleSubmit, handleClose }) => (
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

MealFormButtons.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default MealFormButtons;
