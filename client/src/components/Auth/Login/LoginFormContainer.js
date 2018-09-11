import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AuthForm from '../AuthForm.js';
import { loginSchema } from '../../../utils/validation-schemas/authInfoSchemas.js';
import { login } from '../../../actions/auth.js';

export const loginFormConfig = {
  mapPropsToValues: () => ({
    username: '',
    password: ''
  }),
  validationSchema: loginSchema,
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);
    const { from } = props.location.state || { from: null };

    await props.dispatch(login(values, from));
    setSubmitting(false);
  }
};

const mapStateToProps = state => ({
  type: 'login',
  location: state.router.location
});

export default compose(
  connect(mapStateToProps),
  withFormik(loginFormConfig)
)(AuthForm);
