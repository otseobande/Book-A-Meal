import React, { PureComponent } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import orderInfoSchema from '../../utils/validation-schemas/orderInfoSchema.js';
import localizeNum from '../../utils/localizeNum.js';
import loadingCube from '../../../assets/img/loading-cube.svg';
import orderStyles from './OrderModal/order-modal.scss';

/**
 * @class OrderInfoForm
 *
 * @param {Object} event
 * @param {String} targetName
 */
class OrderInfoForm extends PureComponent {
  static propTypes = {
    meal: PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
    quantity: PropTypes.number,
    deliveryAddress: PropTypes.string,
    phoneNumber: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    proceedText: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    isProcessing: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  }

  static defaultProps = {
    quantity: 1,
    deliveryAddress: '',
    phoneNumber: ''
  }

  state = {
    quantity: this.props.quantity,
    fields: {
      deliveryAddress: this.props.deliveryAddress,
      phoneNumber: this.props.phoneNumber
    },
    errors: {},
    touched: {},
    detailsEntered: false
  };

  handleChange = (event) => {
    const targetName = event.target.name;
    const currentValue = event.target.value;

    this.setState(state => ({
      fields: {
        ...state.fields,
        [targetName]: currentValue
      }
    }), debounce(() => this.validate(targetName), 1000));
  }

  handleBlur = (event) => {
    this.validate(event.target.name);
  }

  validate = (targetName) => {
    orderInfoSchema.validate(
      this.state.fields,
      { abortEarly: false }
    ).then(() => {
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
      this.setState(state => ({
        touched: {
          ...state.touched,
          [targetName]: true
        },
        errors
      }));
    });
  }

  proceedToConfirm = () => {
    orderInfoSchema.validate(
      this.state.fields,
      { abortEarly: false }
    ).then(() => {
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
    this.setState(state => ({ quantity: state.quantity + 1 }));
  }

  reduceQuantity = () => {
    this.setState((state) => {
      if (state.quantity > 1) {
        return {
          quantity: state.quantity - 1
        };
      }
    });
  }
  goBackToEdit = () => {
    this.setState({ detailsEntered: false });
  }

  handleSubmit = () => {
    const orderDetails = {
      mealId: this.props.meal.id,
      quantity: this.state.quantity,
      phoneNumber: this.state.fields.phoneNumber,
      deliveryAddress: this.state.fields.deliveryAddress
    };

    this.props.handleSubmit(orderDetails);
  }

  /**
   * @return {JSX} React JSX
   */
  render() {
    const {
      meal, isProcessing, handleClose, proceedText, headerText
    } = this.props;
    return (
      <div>
        <h3 className={orderStyles.header}>
          {
              this.state.detailsEntered ?
              headerText :
              'Order information'
            }
        </h3>
        <div className={orderStyles.content}>
          <div className={orderStyles.imageContainer}>
            <img className={orderStyles.mealImage} src={meal.img} alt="meal" />
          </div>
          <div className={orderStyles.detailArea}>
            <div className={orderStyles.info}>
              <b>Title: </b>{meal.title}
            </div>
            <div className={orderStyles.info}>
              <b>Price: </b>&#8358;{localizeNum(meal.price * this.state.quantity)}
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
                  {!isProcessing &&

                  <button
                    className={orderStyles.editDetailsBtn}
                    onClick={this.goBackToEdit}
                  >
                    Edit details
                  </button>
                  }

                  <button
                    className={orderStyles.successBtn}
                    onClick={this.handleSubmit}
                    disabled={isProcessing ? 'disabled' : ''}
                  >
                    {
                      !isProcessing ? proceedText :
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
    );
  }
}

export default OrderInfoForm;
