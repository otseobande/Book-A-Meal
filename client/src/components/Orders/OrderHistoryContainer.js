import { connect } from 'react-redux';
import { fetchOrderHistory, cancelOrder, updateOrder } from '../../actions/orders.js';
import OrderHistory from './OrderHistory.js';

const mapStateToProps = state => ({
  isFetching: state.orderHistory.isFetching,
  orders: state.orderHistory.orders,
  paginationDetails: state.orderHistory.pagination
});

export default connect(mapStateToProps, {
  fetchOrderHistory,
  cancelOrder,
  updateOrder
})(OrderHistory);
