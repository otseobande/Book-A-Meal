import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import AuthForm from '../AuthForm.js';
import { sendResetMail } from '../../../actions/resetPassword.js';

const resetPasswordFormConfig = {
  mapPropsToValues: () => ({
    email: ''
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!')
  }),
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);
    await props.dispatch(sendResetMail(values));
    setSubmitting(false);
  }
};
const mapStateToProps = state => ({
  type: 'reset',
  mailSent: state.resetPassword.mailSent
});

export default compose(
  connect(mapStateToProps),
  withFormik(resetPasswordFormConfig)
)(AuthForm);
