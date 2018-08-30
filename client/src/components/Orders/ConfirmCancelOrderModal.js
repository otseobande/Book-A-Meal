import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './confirm-cancel-modal.scss';

/**
 * @class ConfirmCancelOrderModal
 */
class ConfirmCancelOrderModal extends PureComponent {
  handleCancel = () => {
    const { handleClose, orderId, handleCancelOrder } = this.props;

    handleCancelOrder(orderId);
    handleClose();
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const {
      isOpen, handleClose
    } = this.props;
    return (
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
            onClick={this.handleCancel}
          >
            Yes
          </button>
        </div>
      </ReactModal>
    );
  }
}

ConfirmCancelOrderModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  orderId: PropTypes.string.isRequired,
  handleCancelOrder: PropTypes.func.isRequired
};

export default ConfirmCancelOrderModal;
