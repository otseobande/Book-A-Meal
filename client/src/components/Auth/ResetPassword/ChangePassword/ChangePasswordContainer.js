import { connect } from 'react-redux';
import ChangePassword from './ChangePassword.js';

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  resetSuccessful: state.resetPassword.resetSuccessful
});

export default connect(mapStateToProps)(ChangePassword);
