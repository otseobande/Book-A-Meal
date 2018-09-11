import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MealForm from '../../Meals/MealForm/MealForm.js';
import { updateMeal } from '../../../actions/meals.js';
import mealInfoSchema from '../../../utils/validation-schemas/mealInfoSchema.js';

export const editMealFormConfig = {
  mapPropsToValues: ({ meal }) => meal,
  validationSchema: mealInfoSchema,
  handleSubmit: async (values, { setSubmitting, props }) => {
    setSubmitting(true);

    await props.dispatch(updateMeal(values, setSubmitting));
    props.handleClose();

    setSubmitting(false);
  }
};

export default compose(
  connect(),
  withFormik(editMealFormConfig)
)(MealForm);
