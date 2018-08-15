import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMeals } from '../../actions/meals.js';
import Meals from './Meals.js';

const mapStateToProps = state => ({
  meals: state.meals.meals,
  isFetching: state.meals.isFetching
});

const mapDispatchToProps = dispatch => ({
  getMeals: bindActionCreators(getMeals, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
