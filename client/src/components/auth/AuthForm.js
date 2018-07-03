import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader.js';
import styles from './auth.scss';

/**
 * @class AuthForm
 */
class AuthForm extends Component {
  submitBtnTxt = () => {
    switch (this.props.type) {
      case 'login':
        return 'Login';
      case 'reset':
        return 'Reset';
      default:
        return 'Sign Up';
    }
  }

  isSignUp = () => this.props.type === 'signup'

  isLogin = () => this.props.type === 'login'

  isReset = () => this.props.type === 'reset'

  /**
   * @return {undefined} - undefined
   */
  render() {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {
          this.isSignUp()
          &&
          <label className={styles.label} htmlFor="fullName">Full name:
            <input
              className={
            errors.fullName && touched.fullName
              ? styles.inputError : styles.input}
              type="text"
              name="fullName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
            />
            {errors.fullName &&
              touched.fullName &&
              <div className={styles.errorMessage}>{errors.fullName}</div>}
          </label>
        }
        {
          (this.isSignUp() || this.isLogin())
          &&
          <label className={styles.label} htmlFor="username">Username:
            <input
              className={
            errors.username && touched.username
              ? styles.inputError : styles.input}
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username &&
            touched.username &&
            <div className={styles.errorMessage}>{errors.username}</div>}
          </label>
        }
        {
          (this.isSignUp() || this.isReset())
          &&
          <label className={styles.label} htmlFor="email">Email:
            <input
              className={
          errors.email && touched.email
            ? styles.inputError : styles.input}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email &&
      touched.email && <div className={styles.errorMessage}>{errors.email}</div>}
          </label>
        }

        {
          this.isSignUp()
          &&
          <label className={styles.label} htmlFor="role">Role:
            <select
              className={
          errors.role && touched.role
            ? styles.selectError : styles.select}
              name="role"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
            >
              <option value="" disabled>Select a role</option>
              <option value="customer">Customer</option>
              <option value="caterer">Caterer</option>
            </select>
            {errors.role &&
      touched.role && <div className={styles.errorMessage}>{errors.role}</div>}
          </label>
        }

        {
          (this.isSignUp() || this.isLogin())
          &&
          <label className={styles.label} htmlFor="password">Password:
            <input
              className={
          errors.password && touched.password
            ? styles.inputError : styles.input}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password &&
      touched.password && <div className={styles.errorMessage}>{errors.password}</div>}
          </label>
        }

        {

          this.isSignUp()
          &&
          <label className={styles.label} htmlFor="password-confirmation">Confirm password:
            <input
              className={
          errors.passwordConfirm && touched.passwordConfirm
            ? styles.inputError : styles.input}
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirm}
            />
            {errors.passwordConfirm &&
      touched.passwordConfirm && <div className={styles.errorMessage}>{errors.passwordConfirm}</div>}
          </label>
        }
        <button
          className={isSubmitting ? styles.loginBtnSubmit : styles.loginBtn}
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader message="" width={30} /> : this.submitBtnTxt()}
        </button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  type: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  errors: PropTypes.objectOf(PropTypes.string),
  isSubmitting: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
};

AuthForm.defaultProps = {
  type: 'signup',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false,
  handleBlur() {}
};

export default AuthForm;
