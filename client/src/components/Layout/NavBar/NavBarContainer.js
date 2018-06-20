import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../../actions/authActionCreators.js';
import NavBar from './NavBar.js';

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
