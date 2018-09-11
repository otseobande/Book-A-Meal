import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../Form/InputField.js';
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
      case 'signup':
        return 'Sign Up';
      case 'reset':
        return 'Send reset password email';
      case 'changepassword':
        return 'Change password';
      default:
        return 'Sign Up';
    }
  }

  isSignUp = () => this.props.type === 'signup';

  isLogin = () => this.props.type === 'login';

  isReset = () => this.props.type === 'reset';

  isChangePassword = () => this.props.type === 'changepassword';

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
      handleSubmit
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        {
          this.isSignUp() &&
          <InputField name="fullName" label="Full name" {...this.props} />
        }
        {
          (this.isSignUp() || this.isLogin()) &&
          <InputField name="username" label="Username" {...this.props} />
        }
        {
          (this.isSignUp() || this.isReset()) &&
          <InputField name="email" label="Email" {...this.props} type="email" />
        }

        {
          this.isSignUp()
          &&
          <div>
            Role:
            <div>
              <label>
                Customer
                <input
                  type="radio"
                  value="customer"
                  name="role"
                  className={styles.roleCheckbox}
                  onChange={handleChange}
                  checked={values.role === 'customer' ? 'checked' : ''}
                />
              </label>
              <label>
                Caterer
                <input
                  type="radio"
                  value="caterer"
                  name="role"
                  className={styles.roleCheckbox}
                  onChange={handleChange}
                  checked={values.role === 'caterer' ? 'checked' : ''}
                />
              </label>
            </div>
            {
              errors.role &&
              touched.role &&
              <div className={styles.errorMessage}>{errors.role}</div>
            }
          </div>
        }

        {
          !this.isReset() &&
          <InputField name="password" label="Password" {...this.props} type="password" />
        }

        {

          (this.isSignUp() || this.isChangePassword()) &&
          <InputField name="passwordConfirm" label="Confirm password" {...this.props} type="password" />
        }
        <button
          className={isSubmitting ? styles.loginBtnSubmit : styles.loginBtn}
          type="submit"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {
            isSubmitting ?
              <Loader message="" width={30} /> :
              this.submitBtnTxt()
          }
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
  handleSubmit: PropTypes.func.isRequired
};

AuthForm.defaultProps = {
  type: 'signup',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false
};

export default AuthForm;
