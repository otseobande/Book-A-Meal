import { connect } from 'react-redux';
import { deleteMeal } from '../../actions/meals.js';
import MealCard from './MealCard.js';


const mapDispatchToProps = dispatch => ({
  handleDelete: mealId => dispatch(deleteMeal(mealId))
});

export default connect(null, mapDispatchToProps)(MealCard);
