import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import OrderSuccessful from './OrderSuccessful.js';
import OrderService from '../../../services/api/orders.js';
import requestErrorHandler from '../../../utils/requestErrorHandler.js';
import OrderInfoForm from '../OrderInfoForm.js';

/**
 * @class OrderModal
 *
 * @param {Object} orderDetails
 */
class OrderModal extends Component {
  static propTypes = {
    meal: PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  }

  state = {
    orderRequestIsProcessing: false,
    orderSuccessful: false
  }

  placeOrder = (orderDetails) => {
    this.setState({ orderRequestIsProcessing: true });

    return OrderService.placeOrder(orderDetails)
      .then(() => {
        this.setState({
          orderRequestIsProcessing: false,
          orderSuccessful: true
        });
      })
      .catch((error) => {
        this.setState({
          orderRequestIsProcessing: false,
          orderSuccessful: false
        });
        requestErrorHandler(error);
      });
  }

  /**
   * @return {JSX} React JSX
   */
  render() {
    const { meal, isOpen, handleClose } = this.props;
    const { orderSuccessful, orderRequestIsProcessing } = this.state;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-body"
        closeTimeoutMS={150}
      >
        {
          orderSuccessful ?
            <OrderSuccessful
              handleClose={handleClose}
            /> :
            <OrderInfoForm
              meal={meal}
              handleSubmit={this.placeOrder}
              proceedText="Confirm order"
              headerText="Confirm order information"
              isProcessing={orderRequestIsProcessing}
              handleClose={handleClose}
            />
        }
      </ReactModal>
    );
  }
}

export default OrderModal;
