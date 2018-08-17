import { connect } from 'react-redux';
import { deleteMenu } from '../../../../actions/catererMenus.js';
import MenuCard from './MenuCard.js';

export default connect(null, { deleteMenu })(MenuCard);
