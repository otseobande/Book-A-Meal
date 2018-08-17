import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import MealForm from '../../Meals/MealForm/MealForm.js';
import { updateMeal } from '../../../actions/meals.js';
import mealInfoSchema from '../../../utils/validation-schemas/mealInfoSchema.js';

const EditMealFormConfig = {
  mapPropsToValues: ({ meal }) => ({
    id: meal.id,
    title: meal.title,
    description: meal.description,
    price: meal.price,
    img: meal.img
  }),
  validationSchema: mealInfoSchema,
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(true);

    props.dispatch(updateMeal(values, setSubmitting))
      .then(props.handleClose);
  }
};

export default compose(
  connect(),
  withFormik(EditMealFormConfig)
)(MealForm);
