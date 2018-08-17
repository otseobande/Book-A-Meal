import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MealForm from '../MealForm/MealForm.js';
import { addMeal } from '../../../actions/meals';
import mealInfoSchema from '../../../utils/validation-schemas/mealInfoSchema.js';

const AddMealFormConfig = {
  mapPropsToValues: () => ({
    title: '',
    description: '',
    price: '',
    img: undefined
  }),
  validationSchema: mealInfoSchema,
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(true);

    props.dispatch(addMeal(values))
      .then(() => {
        setSubmitting(false);
        props.handleClose();
      });
  }
};

export default compose(
  connect(),
  withFormik(AddMealFormConfig)
)(MealForm);
