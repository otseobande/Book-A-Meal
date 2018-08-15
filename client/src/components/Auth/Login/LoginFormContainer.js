import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import AuthForm from '../AuthForm.js';
import { loginSchema } from '../../../utils/validationSchemas.js';
import { login } from '../../../actions/auth.js';

const loginFormConfig = {
  mapPropsToValues: () => ({
    username: '',
    password: ''
  }),
  validationSchema: loginSchema,
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(true);
    const { from } = props.location.state || { from: null };

    props.dispatch(login(values, from)).then(() => {
      setSubmitting(false);
    });
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
