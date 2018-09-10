import { connect } from 'react-redux';
import { deleteMeal } from '../../actions/meals.js';
import MealCard from './MealCard.js';

export default connect(null, { deleteMeal })(MealCard);
