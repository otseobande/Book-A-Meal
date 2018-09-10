import { connect } from 'react-redux';
import { getMeals } from '../../actions/meals.js';
import Meals from './Meals.js';

const mapStateToProps = state => ({
  meals: state.catererMeals.meals,
  pagination: state.catererMeals.pagination,
  isFetching: state.catererMeals.isFetching
});

export default connect(mapStateToProps, { getMeals })(Meals);
