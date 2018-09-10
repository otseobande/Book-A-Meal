import * as Yup from 'yup';

const username = Yup.string().required('Username is required!');
const password = Yup.string().required('Password is required!');
const email = Yup.string()
  .email('Invalid email address')
  .required('Email is required!');

export const loginSchema = Yup.object().shape({
  username,
  password
});

export const signUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Fullname is required!'),
  email,
  username,
  role: Yup.string().required('Role is required!'),
  password,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], "Passwords don't match!")
    .required('Password confirmation is required')
});

export const resetPasswordSchema = Yup.object().shape({
  email
});

