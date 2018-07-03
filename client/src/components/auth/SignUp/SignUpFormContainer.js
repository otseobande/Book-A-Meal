import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as Yup from 'yup';
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
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Fullname is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    username: Yup.string().required('username is required!'),
    role: Yup.string().required('Role is required!'),
    password: Yup.string()
      .required('Password is required')
      .min(6),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords don't match!")
      .required('Password confirmation is required')
  }),
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);
    await props.dispatch(signup(values));
    setSubmitting(false);
  }
};

export default compose(connect(), withFormik(signUpFormConfig))(AuthForm);
