import * as Yup from 'yup';

const mealInfoSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string()
    .min(4)
    .required('Description is required'),
  price: Yup.number()
    .positive()
    .min(1)
    .required('Price is required'),
  img: Yup.mixed()
});

export default mealInfoSchema;
