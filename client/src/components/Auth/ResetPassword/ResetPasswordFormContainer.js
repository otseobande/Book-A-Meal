import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { resetPasswordSchema } from '../../../utils/validationSchemas.js';
import AuthForm from '../AuthForm.js';
import { sendResetMail } from '../../../actions/resetPassword.js';

const resetPasswordFormConfig = {
  mapPropsToValues: () => ({
    email: ''
  }),
  validationSchema: resetPasswordSchema,
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
