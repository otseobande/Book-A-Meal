import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './confirm-delete-modal.scss';

/**
 * @class ConfirmDeleteModal
 */
class ConfirmDeleteModal extends PureComponent {
  handleDelete = () => {
    const { handleDelete, handleClose } = this.props;

    handleDelete();
    handleClose();
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const {
      isOpen, handleClose, confirmText
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
          <p>{confirmText}</p>
          <button
            className={styles.noBtn}
            onClick={handleClose}
          >
            No
          </button>
          <button
            className={styles.yesBtn}
            onClick={this.handleDelete}
          >
            Yes
          </button>
        </div>
      </ReactModal>
    );
  }
}

ConfirmDeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  confirmText: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

ConfirmDeleteModal.defaultProps = {
  confirmText: 'Are you sure you want to delete?'
};

export default ConfirmDeleteModal;
