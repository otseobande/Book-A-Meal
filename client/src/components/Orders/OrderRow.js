import React, { Component, Fragment } from 'react';
import ConfirmCancelOrderModal from './ConfirmCancelOrderModal.js';
import UpdateOrderModal from './UpdateOrderModal.js';
import localizeNum from '../../utils/localizeNum.js';
import formatDateString from '../../utils/formatDateString.js';
import orderIsModifiable from '../../utils/orderIsModifiable.js';
import OrderService from '../../services/api/orders.js';
import styles from './order.scss';

/**
 * @class OrderRow
 */
class OrderRow extends Component {
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
      <div className={styles.row} key={order.id}>
        <div className={styles.cell} data-title="date">
          {formatDateString(order.createdAt)}
        </div>
        <div className={styles.cell} data-title="Meal">
          {order.meal.title}
        </div>
        <div className={styles.cell} data-title="Quantity">
          {order.quantity}
        </div>
        <div className={styles.cell} data-title="Price">
          &#8358;{localizeNum(order.price)}
        </div>
        <div className={styles.cell} data-title="Delivery address">
          <p className={styles.deliveryAddress}>{order.deliveryAddress}</p>
        </div>
        <div className={styles.cell} data-title="Status">
          {this.colorStatus(order.status)}
        </div>
        <div className={styles.cell} data-title="">
          {/*  */}
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
        </div>
        <ConfirmCancelOrderModal
          isOpen={this.state.cancelModalIsOpen}
          handleClose={this.closeCancelConfirmationModal}
          order={order}
          handleCancelOrder={this.props.handleCancelOrder}
        />
        <UpdateOrderModal
          isOpen={this.state.updateModalIsOpen}
          handleClose={this.closeUpdateModal}
          order={order}
          handleUpdateOrder={this.props.handleUpdateOrder}
        />
      </div>
    );
  }
}

export default OrderRow;
