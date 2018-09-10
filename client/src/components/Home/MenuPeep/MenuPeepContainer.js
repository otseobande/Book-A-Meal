import { connect } from 'react-redux';
import { peepMenus } from '../../../actions/peepMenus.js';
import MenuPeep from './MenuPeep.js';

const mapStateToProps = state => ({
  loading: state.menusPeep.isFetching,
  meals: state.menusPeep.meals,
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, {
  peepMenus
})(MenuPeep);
