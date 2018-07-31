import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOrderHistory, cancelOrder } from '../../actions/orders.js';
import OrderHistory from './OrderHistory.js';

const mapStateToProps = state => ({
  isFetching: state.orderHistory.isFetching,
  orders: state.orderHistory.orders
});

const mapDispatchToProps = dispatch => ({
  fetchOrderHistory: bindActionCreators(fetchOrderHistory, dispatch),
  cancelOrder: bindActionCreators(cancelOrder, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
