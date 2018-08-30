import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import checkMark from '../../../../assets/img/check-mark.svg';
import orderStyles from './order-modal.scss';

const OrderSuccessful = ({ handleClose }) => (
  <div style={{ textAlign: 'center' }}>
    <h3>Order placed successfully</h3>
    <img src={checkMark} alt="check-mark" width="50" />
    <p>
      <Link to="/orders">View order history</Link>
    </p>
    <p>
      Please note that order update and cancellation
      can only be done 15 minutes after the order is placed.
    </p>

    <div style={{ paddingTop: '35px' }}>
      <button
        className={orderStyles.closeModalBtn}
        onClick={handleClose}
      >
      close
      </button>
    </div>
  </div>
);

OrderSuccessful.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default OrderSuccessful;
