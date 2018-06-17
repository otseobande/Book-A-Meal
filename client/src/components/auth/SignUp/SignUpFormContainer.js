import { withFormik } from 'formik';
import * as Yup from 'yup';
import { compose } from 'redux';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm.js';

const signUpFormConfig = {
  mapPropsToValues: () => ({
    fullname: '',
    username: '',
    email: '',
    role: '',
    password: '',
    passwordConfirm: ''
  }),
  validationSchema: Yup.object().shape({
    fullname: Yup.string().required('Fullname is required!'),
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
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 4000);
  },
  displayName: 'SignUp Form'
};

export default compose(withFormik(signUpFormConfig), connect())(SignUpForm);
