import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './order.scss';

const ConfirmMarkAsDeliveredModal = ({
  orderId, isOpen, handleClose, deliverOrder
}) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={handleClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-body"
    closeTimeoutMS={150}
  >
    <div className={styles.body}>
      <p>Are you sure you want to mark order as delivered?</p>
      <button
        className={styles.successBtn}
        onClick={() => {
          deliverOrder(orderId);
          }}
      >
        Yes
      </button>
      <button
        className={styles.updateBtn}
        onClick={handleClose}
      >
        No
      </button>
    </div>
  </ReactModal>
);

ConfirmMarkAsDeliveredModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  deliverOrder: PropTypes.func.isRequired,
  orderId: PropTypes.string.isRequired
};

export default ConfirmMarkAsDeliveredModal;
