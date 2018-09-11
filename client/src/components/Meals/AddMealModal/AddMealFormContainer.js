import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MealForm from '../MealForm/MealForm.js';
import { saveMeal } from '../../../actions/meals';
import mealInfoSchema from '../../../utils/validation-schemas/mealInfoSchema.js';

export const addMealFormConfig = {
  mapPropsToValues: () => ({
    title: '',
    description: '',
    price: '',
    img: undefined
  }),
  validationSchema: mealInfoSchema,
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);

    await props.dispatch(saveMeal(values));

    setSubmitting(false);
    props.handleClose();
  }
};

export default compose(
  connect(),
  withFormik(addMealFormConfig)
)(MealForm);
