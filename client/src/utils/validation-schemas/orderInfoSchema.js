import * as Yup from 'yup';

const orderInfoSchema = Yup.object().shape({
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

export default orderInfoSchema;
