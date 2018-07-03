import React from 'react';
import PropTypes from 'prop-types';
import styles from './field.scss';

const Field = ({
  label,
  type,
  name,
  errors,
  touched,
  values,
  handleBlur,
  handleChange
}) => (
  <label className={styles.label} htmlFor={name}>
    {label}
    <input
      className={
        errors[name] && touched[name]
          ? styles.inputError : styles.input
      }
      type={type}
      name={name}
      id={name}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
    />
    {
      errors[name] && touched[name]
      && <div className={styles.errorMessage}>{errors[name]}</div>
    }
  </label>
);

Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  errors: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func
};

Field.defaultProps = {
  label: '',
  type: 'text',
  values: {},
  touched: {},
  errors: {},
  handleChange() {},
  handleBlur() {}
};


export default Field;
