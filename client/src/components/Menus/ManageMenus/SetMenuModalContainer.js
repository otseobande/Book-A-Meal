import { connect } from 'react-redux';
import { setMenu } from '../../../actions/catererMenus.js';
import SetMenuModal from './SetMenuModal.js';

const mapStateToProps = state => ({
  meals: state.catererMeals.meals
});

export default connect(mapStateToProps, { setMenu })(SetMenuModal);
