import { connect } from 'react-redux';
import { changeMenu } from '../../../../actions/catererMenus.js';
import EditMenuModal from './EditMenuModal.js';

const mapStateToProps = state => ({
  meals: state.catererMeals.meals
});

export default connect(mapStateToProps, { changeMenu })(EditMenuModal);
