import { withFormik } from 'formik';
import * as Yup from 'yup';
import { compose } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import { push } from 'connected-react-router';
import { toast } from 'react-toastify';
import SignUpForm from './SignUpForm.js';
import { loginSuccess } from '../../../actions/authActionCreators.js';

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
  handleSubmit: (values, { setSubmitting, props }) => {
    axios.post(`${APP_URL}/api/v1/auth/signup`, values, {
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then((res) => {
      setSubmitting(false);

      const userDetails = res.data;
      props.dispatch(loginSuccess(userDetails));
      props.dispatch(push('/'));
      toast.success('Signup successful!');

    }).catch((err) => {
      if (err.response && err.response.data) {
        const messages = err.response.data.message;

        if (Array.isArray(err.response.data.message)) {
          messages.forEach((message) => {
            toast.error(message);
          });
        } else {
          toast.error(messages);
        }
      }
      setSubmitting(false);
    });
  },
  displayName: 'SignUp Form'
};

const mapStateToProps = state => ({
  router: state.router
});

export default compose(connect(mapStateToProps), withFormik(signUpFormConfig))(SignUpForm);
