import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import * as Yup from 'yup';
import classnames from 'classnames';
import OrderService from '../../services/api/orders.js';
import localizeNum from '../../utils/localizeNum.js';
import requestErrorHandler from '../../utils/requestErrorHandler.js';
import orderStyles from '../OrderModal/order-modal.scss';
import loadingCube from '../../../assets/img/loading-cube.svg';


const schema = Yup.object().shape({
  deliveryAddress: Yup.string()
    .min(10, 'Delivery address should be at least 10 characters')
    .max(100, 'Delivery address should be less than 100 characters')
    .matches(
      /^[a-z0-9 (),.'-]+$/i,
      "Address can only contain letters, numbers and any of these ( , . ' - )"
    )
    .required('Delivery address is required'),
  phoneNumber: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/i,
      'Phone number is invalid.'
    )
    .min(11)
    .required('Phone number is required')
});


/**
 * @class UpdateOrderModal
 */
class UpdateOrderModal extends Component {
  state = {
    quantity: this.props.order.quantity,
    fields: {
      deliveryAddress: this.props.order.deliveryAddress,
      phoneNumber: this.props.order.phoneNumber
    },
    errors: {},
    touched: {},
    detailsEntered: false,
    updateOrderRequestIsProcessing: false,
    updateOrderSuccessful: false
  };

  handleChange = (event) => {
    const targetName = event.target.name;

    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value
      }
    }, () => this.validate(targetName));
  }

  handleBlur = (event) => {
    this.validate(event.target.name);
  }

  validate = (targetName) => {
    schema.validate(this.state.fields, { abortEarly: false }).then(() => {
      const { errors } = this.state;
      delete errors[targetName];

      this.setState({
        errors
      });
    }).catch((error) => {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      this.setState(prevState => ({
        touched: {
          ...prevState.touched,
          [targetName]: true
        },
        errors
      }));
    });
  }

  handleClose = () => {
    this.setState({
      detailsEntered: false,
      updateOrderRequestIsProcessing: false,
    });
    this.props.handleClose();
  }

  proceedToConfirm = (event) => {
    event.preventDefault();

    schema.validate(this.state.fields, { abortEarly: false }).then(() => {
      this.setState({ detailsEntered: true });
    }).catch((error) => {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      const touched = Object.keys(this.state.fields)
        .reduce((acc, field) => ({ ...acc, [field]: true }), {});
      this.setState({
        touched,
        errors
      });
    });
  }

  increaseQuantity = () => {
    this.setState(prevState => ({ quantity: prevState.quantity + 1 }));
  }

  reduceQuantity = () => {
    this.setState((prevState) => {
      if (prevState.quantity > 1) {
        return {
          quantity: prevState.quantity - 1
        };
      }
    });
  }
  goBackToEdit = () => {
    this.setState({ detailsEntered: false });
  }

  updateOrder = (orderId) => {
    this.setState({ updateOrderRequestIsProcessing: true });
    const { handleUpdateOrder } = this.props;
    const orderDetails = {
      deliveryAddress: this.state.fields.deliveryAddress,
      phoneNumber: this.state.fields.phoneNumber,
      quantity: this.state.quantity,
      mealId: this.props.order.meal.id
    };

    handleUpdateOrder(orderId, orderDetails)
      .then(this.handleClose);
  }
  /**
   * @return {JSX} React jsx
   */
  render() {
    const {
      isOpen, handleClose, order, handleUpdateOrder
    } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-body"
        closeTimeoutMS={150}
      >
        <div>
          <h3 className={orderStyles.header}>
            {
              this.state.detailsEntered ?
              'Confirm order' :
              'Update order'
            }
          </h3>
          <div className={orderStyles.content}>
            <div className={orderStyles.imageContainer}>
              <img className={orderStyles.mealImage} src={order.meal.img} alt="meal" />
            </div>
            <div className={orderStyles.detailArea}>
              <div className={orderStyles.info}>
                <b>Title: </b>{order.meal.title}
              </div>
              <div className={orderStyles.info}>
                <b>Price: </b>&#8358;{localizeNum(order.meal.price * this.state.quantity)}
              </div>
              <div
                className={classnames(orderStyles.info, orderStyles.quantityArea)}
              >
                <b>Quantity: </b>
                <span className={orderStyles.quantityCtrl}>
                  {
                    !this.state.detailsEntered &&
                    <button
                      className={orderStyles.quantityBtn}
                      onClick={this.reduceQuantity}
                    >
                      -
                    </button>
                  }
                  {this.state.quantity}
                  {
                    !this.state.detailsEntered &&
                    <button
                      className={orderStyles.quantityBtn}
                      onClick={this.increaseQuantity}
                    >
                      +
                    </button>
                  }
                </span>
              </div>
              <div className={orderStyles.info}>
                <b>Phone number: </b><br />
                <input
                  className={
                    this.state.errors.phoneNumber && this.state.touched.phoneNumber ?
                    orderStyles.errorInput :
                    orderStyles.input
                  }
                  value={this.state.fields.phoneNumber}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  disabled={this.state.detailsEntered ? 'disabled' : ''}
                  name="phoneNumber"
                />
                {
                  this.state.errors.phoneNumber && this.state.touched.phoneNumber &&
                  <span
                    className={orderStyles.errorMessage}
                  >
                    {this.state.errors.phoneNumber}
                  </span>
                }
              </div>
              <div className={orderStyles.info}>
                <b>Delivery address: </b><br />
                <textarea
                  value={this.state.fields.deliveryAddress}
                  onChange={this.handleChange}
                  name="deliveryAddress"
                  onBlur={this.handleBlur}
                  disabled={this.state.detailsEntered ? 'disabled' : ''}
                  maxLength="101"
                  className={
                    this.state.errors.deliveryAddress && this.state.touched.deliveryAddress ?
                    orderStyles.errorDeliveryAddressInput :
                    orderStyles.deliverAddressInput

                  }
                />
                {
                  this.state.errors.deliveryAddress && this.state.touched.deliveryAddress &&
                  <span
                    className={orderStyles.errorMessage}
                  >
                    {this.state.errors.deliveryAddress}
                  </span>
                }
              </div>
            </div>
          </div>
          <div>
            {
              this.state.detailsEntered ?
                <div className={orderStyles.btns}>
                  <button
                    className={orderStyles.cancelBtn}
                    onClick={this.goBackToEdit}
                  >
                  Edit details
                  </button>
                  <button
                    className={orderStyles.successBtn}
                    onClick={() => this.updateOrder(order.id)}
                    disabled={this.state.updateOrderRequestIsProcessing ? 'disabled' : ''}
                  >
                    {
                      !this.state.updateOrderRequestIsProcessing ? 'Update order' :
                      <span>
                        Processing
                        <img style={{ paddingLeft: '5px' }} src={loadingCube} width="20" alt="loading" />
                      </span>
                    }
                  </button>
                </div> :
                <div className={orderStyles.btns}>
                  <button
                    className={orderStyles.cancelBtn}
                    onClick={handleClose}
                  >
                    Cancel
                  </button>
                  <button
                    className={orderStyles.successBtn}
                    onClick={this.proceedToConfirm}
                    id="proceed"
                  >
                    Continue
                  </button>
                </div>
              }
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default UpdateOrderModal;
