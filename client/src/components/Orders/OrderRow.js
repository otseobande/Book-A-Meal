import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ConfirmCancelOrderModal from './ConfirmCancelOrderModal.js';
import UpdateOrderModal from './UpdateOrderModal.js';
import localizeNum from '../../utils/localizeNum.js';
import formatDateString from '../../utils/formatDateString.js';
import orderIsModifiable from '../../utils/orderIsModifiable.js';
import Cell from '../ResponsiveTable/Cell.js';
import Row from '../ResponsiveTable/Row.js';
import styles from './order.scss';

/**
 * @class OrderRow
 *
 * @param {String} status
 */
class OrderRow extends Component {
  static propTypes = {
    order: PropTypes.shape({
      id: PropTypes.string.isRequired,
      meal: PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    handleCancelOrder: PropTypes.func.isRequired,
    handleUpdateOrder: PropTypes.func.isRequired
  }

  state = {
    cancelModalIsOpen: false,
    updateModalIsOpen: false
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

  closeCancelConfirmationModal = () => {
    this.setState({ cancelModalIsOpen: false });
  }

  openCancelConfirmationModal = () => {
    this.setState({ cancelModalIsOpen: true });
  }

  closeUpdateModal = () => {
    this.setState({ updateModalIsOpen: false });
  }

  openUpdateModal = () => {
    this.setState({ updateModalIsOpen: true });
  }
  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { order } = this.props;
    return (
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
            orderIsModifiable(order.createdAt) &&
            <Fragment>
              <button
                className={styles.updateBtn}
                onClick={this.openUpdateModal}
              >
                update
              </button>
              <button
                className={styles.deleteBtn}
                onClick={this.openCancelConfirmationModal}
              >
                cancel
              </button>
            </Fragment>
          }
        </Cell>

        <ConfirmCancelOrderModal
          isOpen={this.state.cancelModalIsOpen}
          handleClose={this.closeCancelConfirmationModal}
          orderId={order.id}
          handleCancelOrder={this.props.handleCancelOrder}
        />
        <UpdateOrderModal
          isOpen={this.state.updateModalIsOpen}
          handleClose={this.closeUpdateModal}
          order={order}
          handleUpdateOrder={this.props.handleUpdateOrder}
        />
      </Row>
    );
  }
}

export default OrderRow;
