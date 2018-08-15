/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

const username = Yup.string().required('username is required!');
const password = Yup.string().required('Password is required');
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

export const orderInfoSchema = Yup.object().shape({
  deliveryAddress: Yup.string()
    .min(10, 'Delivery address should be at least 10 characters')
    .max(100, 'Delivery address should be less than 100 characters')
    .matches(
      /^[a-z0-9 (),.'-]+$/i,
      "Address can only contain letters, numbers and any of these ( , . ' - )"
    )
    .required('Delivery address is required'),
  phoneNumber: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/i,
      'Phone number is invalid.'
    )
    .min(11)
    .required('Phone number is required')
});
