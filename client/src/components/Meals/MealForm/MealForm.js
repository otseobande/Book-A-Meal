import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../Form/InputField.js';
import MealFormButtons from './MealFormButtons.js';
import styles from './meal-form.scss';

const MealForm = props => (
  <form onSubmit={props.handleSubmit}>
    <h2>Meal details</h2>
    <InputField name="title" label="Title" {...props} />
    <InputField name="description" label="Description" {...props} />
    <InputField name="price" label="Price" type="number" {...props} />
    <label htmlFor="image" className={styles.label}>
      {props.values.img ? 'Change image:' : 'Upload image:' }
      <input
        name="image"
        type="file"
        className={styles.fileInput}
        onChange={(event) => {
          props.setFieldValue('image', event.currentTarget.files[0]);
        }}
        onBlur={props.handleBlur}
      />
    </label>
    { props.values.img && <img src={props.values.img} width="80" alt="meal" /> }
    <MealFormButtons
      isSubmitting={props.isSubmitting}
      handleClose={props.handleClose}
      handleSubmit={props.handleSubmit}
    />
  </form>
);

MealForm.propTypes = {
  values: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  errors: PropTypes.objectOf(PropTypes.string),
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired
};

MealForm.defaultProps = {
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false,
  handleBlur() {}
};

export default MealForm;
