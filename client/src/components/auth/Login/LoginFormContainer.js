import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import AuthForm from '../AuthForm.js';
import { login } from '../../../actions/auth.js';

const loginFormConfig = {
  mapPropsToValues: () => ({
    username: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required('username is required!'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const { from } = props.location.state || { from: '/menus' };

    props.dispatch(login(values, from));
    setSubmitting(false);
  }
};

const mapStateToProps = state => ({
  type: 'login',
  location: state.router.location
});

export default compose(connect(mapStateToProps), withFormik(loginFormConfig))(AuthForm);
