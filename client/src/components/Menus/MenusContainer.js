import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMenusForTheDay } from '../../actions/menusForTheDay.js';
import Menus from './Menus.js';

const mapStateToProps = state => ({
  loading: state.menusForTheDay.isFetching,
  menus: state.menusForTheDay.menus,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  getMenusForTheDay: bindActionCreators(getMenusForTheDay, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menus);
