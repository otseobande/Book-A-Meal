import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../assets/scss/form.scss';

const InputField = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  name,
  label,
  type
}) => (
  <label className={styles.label} htmlFor={name}>
    {label}:
    <input
      className={
        errors[name] && touched[name]
          ? styles.inputError : styles.input}
      type={type}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[name]}
    />
    {
      errors[name] &&
      touched[name] &&
      <div className={styles.errorMessage}>{errors[name]}</div>
    }
  </label>
);

InputField.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

InputField.defaultProps = {
  type: 'text'
};

export default InputField;
