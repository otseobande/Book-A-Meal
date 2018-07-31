import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './cancel-modal.scss';

/**
 * @class ConfirmCancelOrderModal
 */
const ConfirmCancelOrderModal = ({
  isOpen, handleClose, order, handleCancelOrder
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={handleClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-body"
    closeTimeoutMS={150}
  >
    <div className={styles.body}>
      <p>Are you sure you want to cancel order?</p>
      <button
        className={styles.noBtn}
        onClick={handleClose}
      >
        No
      </button>
      <button
        className={styles.yesBtn}
        onClick={() => {
          handleCancelOrder(order.id);
          handleClose();
        }}
      >
        Yes
      </button>
    </div>
  </ReactModal>

);

export default ConfirmCancelOrderModal;
