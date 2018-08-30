import { connect } from 'react-redux';
import ResetPassword from './ResetPassword';

const mapStateToProps = state => ({
  mailSent: state.resetPassword.mailSent
});

export default connect(mapStateToProps)(ResetPassword);
