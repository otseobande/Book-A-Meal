import { connect } from 'react-redux';
import { getMealsForTheDay } from '../../../actions/mealsForTheDay';
import MenuPeep from './MenuPeep.js';

const mapStateToProps = state => ({
  loading: state.mealsForTheDay.isFetching,
  meals: state.mealsForTheDay.meals
});

const mapDispatchToProps = dispatch => ({
  getMealsForTheDay: () => dispatch(getMealsForTheDay())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPeep);
