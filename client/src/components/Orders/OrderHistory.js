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
import Table from '../ResponsiveTable/Table.js';
import Cell from '../ResponsiveTable/Cell.js';
import Row from '../ResponsiveTable/Row.js';

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

  updateOrder = (orderId, orderDetails) => OrderService.updateOrder(orderId, orderDetails)
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
    }).catch(requestErrorHandler)
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
            <Table>
              <Row header>
                <Cell>Date</Cell>
                <Cell>Meal</Cell>
                <Cell>Qty</Cell>
                <Cell>Price</Cell>
                <Cell>Delivery address</Cell>
                <Cell>Status</Cell>
                <Cell>Actions</Cell>
              </Row>
              { !this.state.fetching && this.state.orders.map(order => (
                <OrderRow
                  key={order.id}
                  order={order}
                  handleCancelOrder={this.cancelOrder}
                  handleUpdateOrder={this.updateOrder}
                />
                ))
              }
            </Table>
            {this.state.fetching && <Loader />}
          </div>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default OrderHistory;
