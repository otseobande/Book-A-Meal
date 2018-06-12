import { connect } from 'react-redux';
import { getMealsForTheDay } from '../../../actions/mealsForTheDay';
import MenuPeep from './menupeep.jsx';

const mapStateToProps = state => ({
  loading: state.mealsForTheDay.isFetching,
  meals: state.mealsForTheDay.meals
});

const mapDispatchToProps = dispatch => ({
  getMealsForTheDay: () => dispatch(getMealsForTheDay())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPeep);
