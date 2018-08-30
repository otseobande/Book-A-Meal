import { connect } from 'react-redux';
import { fetchOrderHistory, deliverOrder } from '../../actions/orders.js';
import CatererOrderHistory from './CatererOrderHistory.js';

const mapStateToProps = state => ({
  isFetching: state.orderHistory.isFetching,
  orders: state.orderHistory.orders,
  paginationDetails: state.orderHistory.pagination
});

export default connect(mapStateToProps, {
  fetchOrderHistory,
  deliverOrder
})(CatererOrderHistory);
