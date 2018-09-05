import { connect } from 'react-redux';
import { getMenus } from '../../../actions/catererMenus.js';
import { getMeals } from '../../../actions/meals.js';
import ManageMenus from './ManageMenus.js';

const mapStateToProps = state => ({
  menus: state.catererMenus.menus,
  pagination: state.catererMenus.pagination,
  isFetching: state.catererMenus.isFetching
});

export default connect(mapStateToProps, { getMenus, getMeals })(ManageMenus);
