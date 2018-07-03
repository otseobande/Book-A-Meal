import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { peepMenus } from '../../../actions/peepMenus.js';
import MenuPeep from './MenuPeep.js';

const mapStateToProps = state => ({
  loading: state.menusPeep.isFetching,
  meals: state.menusPeep.meals,
  loggedIn: state.auth.loggedIn
});

const mapDispatchToProps = dispatch => ({
  peepMenus: bindActionCreators(peepMenus, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPeep);
