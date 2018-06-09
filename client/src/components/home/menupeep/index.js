import { connect } from 'react-redux';
import { getMenusForTheDay } from '../../../actions/menusfortheDay';
import MenuPeep from './menupeep.jsx';

const mapStateToProps = state => ({
  loading: state.menusForTheDay.loading,
  meals: state.menusForTheDay.meals
});

const mapDispatchToProps = dispatch => ({
  getMenus: () => dispatch(getMenusForTheDay())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPeep);
