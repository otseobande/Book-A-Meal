import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import OrderInfoForm from './OrderInfoForm.js';

/**
 * @class UpdateOrderModal
 */
class UpdateOrderModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleUpdateOrder: PropTypes.func.isRequired,
    order: PropTypes.shape({
      id: PropTypes.string.isRequired,
      meal: PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
      }).isRequired,
      deliveryAddress: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired
    }).isRequired
  }

  state = {
    updateOrderRequestIsProcessing: false
  };

  handleClose = () => {
    this.setState({
      updateOrderRequestIsProcessing: false
    });
    this.props.handleClose();
  }


  updateOrder = (orderDetails) => {
    const { order, handleUpdateOrder } = this.props;

    this.setState({ updateOrderRequestIsProcessing: true });

    return handleUpdateOrder(order.id, orderDetails)
      .then(this.handleClose);
  }

  /**
   * @return {JSX} React jsx
   */
  render() {
    const {
      isOpen, handleClose, order
    } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-body"
        closeTimeoutMS={150}
      >
        <OrderInfoForm
          meal={order.meal}
          quantity={order.quantity}
          deliveryAddress={order.deliveryAddress}
          phoneNumber={order.phoneNumber}
          handleSubmit={this.updateOrder}
          proceedText="Confirm update"
          headerText="Confirm order information"
          isProcessing={this.state.updateOrderRequestIsProcessing}
          handleClose={handleClose}
        />
      </ReactModal>
    );
  }
}

export default UpdateOrderModal;
