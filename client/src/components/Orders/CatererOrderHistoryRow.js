import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDateString from '../../utils/formatDateString.js';
import localizeNum from '../../utils/localizeNum.js';
import Cell from '../ResponsiveTable/Cell.js';
import Row from '../ResponsiveTable/Row.js';
import ConfirmMarkAsDeliveredModal from './ConfirmMarkAsDeliveredModal.js';
import styles from './order.scss';

/**
 * @class CatererOrderHistoryRow
 */
class CatererOrderHistoryRow extends Component {
  static propTypes = {
    handleDeliver: PropTypes.func.isRequired,
    order: PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number,
      status: PropTypes.string,
      deliveryAddress: PropTypes.string,
      phoneNumber: PropTypes.string,
      meal: PropTypes.object
    }).isRequired
  }

  state = {
    deliverModalOpen: false
  }

  openDeliverModal = () => {
    this.setState({ deliverModalOpen: true });
  }

  closeDeliverModal = () => {
    this.setState({ deliverModalOpen: false });
  }

  handleDeliver = (orderId) => {
    this.props.handleDeliver(orderId);
    this.closeDeliverModal();
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
    const { order } = this.props;
    return (
      <Fragment>
        <Row key={order.id}>
          <Cell title="date">
            {formatDateString(order.createdAt)}
          </Cell>
          <Cell title="Meal">
            {order.meal.title}
          </Cell>
          <Cell title="Quantity">
            {order.quantity}
          </Cell>
          <Cell title="Price">
            &#8358;{localizeNum(order.price)}
          </Cell>
          <Cell title="Delivery address">
            <p className={styles.deliveryAddress}>{order.deliveryAddress}</p>
          </Cell>
          <Cell title="Status">
            {this.colorStatus(order.status)}
          </Cell>
          <Cell>
            {
              order.status === 'pending' &&
              <Fragment>
                <button
                  className={styles.deliverBtn}
                  onClick={this.openDeliverModal}
                >
                  Mark as delivered
                </button>
              </Fragment>
            }
          </Cell>
        </Row>
        <ConfirmMarkAsDeliveredModal
          isOpen={this.state.deliverModalOpen}
          handleClose={this.closeDeliverModal}
          deliverOrder={this.handleDeliver}
          orderId={order.id}
        />
      </Fragment>
    );
  }
}

export default CatererOrderHistoryRow;
