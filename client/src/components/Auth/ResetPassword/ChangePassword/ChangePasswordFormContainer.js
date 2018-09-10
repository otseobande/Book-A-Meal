import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import AuthForm from '../../AuthForm.js';
import { resetPassword } from '../../../../actions/resetPassword.js';

export const changePasswordFormConfig = {
  mapPropsToValues: () => ({
    password: '',
    passwordConfirm: ''
  }),
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required('Password confirmation is required')
  }),
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);
    const resetToken = props.pathname.split('/').pop();
    const resetDetails = {
      password: values.password,
      resetToken
    };
    await props.dispatch(resetPassword(resetDetails));
    setSubmitting(false);
  }
};

const mapStateToProps = state => ({
  type: 'changepassword',
  pathname: state.router.location.pathname
});

export default compose(
  connect(mapStateToProps),
  withFormik(changePasswordFormConfig)
)(AuthForm);
