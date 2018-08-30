import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUpSchema } from '../../../utils/validation-schemas/authInfoSchemas.js';
import AuthForm from '../AuthForm.js';
import { signup } from '../../../actions/auth.js';

const signUpFormConfig = {
  mapPropsToValues: () => ({
    fullName: '',
    username: '',
    email: '',
    role: '',
    password: '',
    passwordConfirm: ''
  }),
  validationSchema: signUpSchema,
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);
    await props.dispatch(signup(values));
    setSubmitting(false);
  }
};
const mapStateToProps = () => ({
  type: 'signup'
});

export default compose(
  connect(mapStateToProps),
  withFormik(signUpFormConfig)
)(AuthForm);
