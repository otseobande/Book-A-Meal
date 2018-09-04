import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MealForm from '../MealForm/MealForm.js';
import { saveMeal } from '../../../actions/meals';
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

    props.dispatch(saveMeal(values))
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
