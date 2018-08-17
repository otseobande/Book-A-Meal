import { connect } from 'react-redux';
import { getMenusForTheDay } from '../../actions/menusForTheDay.js';
import Menus from './Menus.js';

const mapStateToProps = state => ({
  loading: state.menusForTheDay.isFetching,
  menus: state.menusForTheDay.menus,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, { getMenusForTheDay })(Menus);
