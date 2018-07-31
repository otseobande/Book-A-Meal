import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import DocumentTitle from 'react-document-title';
import { toast } from 'react-toastify';
import orderIsModifiable from '../../utils/orderIsModifiable.js';
import requestErrorHandler from '../../utils/requestErrorHandler.js';
import localizeNum from '../../utils/localizeNum.js';
import Loader from '../Loader.js';
import OrderService from '../../services/api/orders.js';
import Layout from '../Layout/Layout.js';
import OrderRow from './OrderRow.js';
import styles from './order.scss';

/**
 * @class OrderHistory
 */
class OrderHistory extends Component {
  state = {
    orders: [],
    fetching: false,
    orderCancelInProgress: false,
    orderCancelSuccessful: false
  }
  /**
   * @returns {undefined} undefined
   */
  componentDidMount() {
    this.fetchOrders();
  }

  fetchOrders = () => {
    this.setState({ fetching: true });
    OrderService.getOrders().then((res) => {
      const { orders } = res.data;

      this.setState(() => ({ orders, fetching: false }));
    }).catch(requestErrorHandler);
  }

  cancelOrder = (orderId) => {
    this.setState({ orderCancelInProgress: true });

    OrderService.cancelOrder(orderId)
      .then(() => {
        this.setState({ orderCancelInProgress: false, orderCancelSuccessful: true });
        const orders = this.state.orders.slice();

        const updatedOrders = orders.map((order) => {
          const updatedOrder = order;
          if (order.id === orderId) {
            updatedOrder.status = 'cancelled';
          }
          return updatedOrder;
        });
        toast.success('Order cancelled');
        this.setState({ orders: updatedOrders });
      }).catch(requestErrorHandler);
  }

  updateOrder = (orderId, orderDetails) => {
    return OrderService.updateOrder(orderId, orderDetails)
      .then((res) => {
        const { order: updatedOrder } = res.data;
        const orders = this.state.orders.slice();

        const updatedOrders = orders.map((order) => {
          if (order.id === updatedOrder.id) {
            return updatedOrder;
          }

          return order;
        });
        this.setState({ orders: updatedOrders });
        toast.success('Order updated successfully');
      }).catch(requestErrorHandler);
  }
  colorStatus = (status) => {
    let color;
    switch (status) {
      case 'pending':
        color = '#f16800';
        break;
      case 'delivered':
        color = 'green';
        break;
      case 'cancelled':
        color = 'red';
        break;
      default:
        color = 'yellow';
    }

    return (<span style={{ color }}>{status}</span>);
  }
  /**
   * @returns {JSX} React JSX
   */
  render() {
    return (
      <DocumentTitle title="Order history - Book-A-Meal">
        <Layout>
          <div className={styles.container}>
            <h2>Order History</h2>
            <div className={styles.tableWrapper} />
            <div className={styles.table}>
              <div className={classnames([styles.row, styles.header])}>
                <div className={styles.cell}>
                  Date
                </div>
                <div className={styles.cell}>
                  Meal
                </div>
                <div className={styles.cell}>
                  Qty
                </div>
                <div className={styles.cell}>
                  Price
                </div>
                <div className={styles.cell}>
                  Delivery address
                </div>

                <div className={styles.cell}>
                    Status
                </div>
                <div className={styles.cell}>
                    Actions
                </div>
              </div>
              { !this.state.fetching && this.state.orders.map(order => (
                <OrderRow
                  key={order.id}
                  order={order}
                  handleCancelOrder={this.cancelOrder}
                  handleUpdateOrder={this.updateOrder}
                />
              ))}
            </div>
            {this.state.fetching && <Loader />}
          </div>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default OrderHistory;
