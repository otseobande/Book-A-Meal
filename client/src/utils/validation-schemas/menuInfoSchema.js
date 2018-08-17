import * as Yup from 'yup';

const menuInfoSchema = Yup.object().shape({
  date: Yup.string().required('Date is required'),
  categories: Yup.array(Yup.object().shape({
    title: Yup.string().required('Category title is required'),
    meals: Yup.array(Yup.object()).required('Meals are required in categories')
  })).required('Categories are required')
});

export default menuInfoSchema;
