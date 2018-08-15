import React, { Component } from 'react';
import ReactModal from 'react-modal';
import styles from './add-meal-modal.scss';

/**
 * @class AddMealModal
 */
class AddMealModal extends Component {
  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { isOpen, handleClose } = this.props;

    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-body"
        closeTimeoutMS={150}
      >
       <form>
        <h2>Add new meal</h2>
        <label htmlFor="title" className={styles.label}>Title:</label>
        <input name="title" className={styles.input}/>

        <label htmlFor="description"  className={styles.label}>Description:</label>
        <input name="description" className={styles.input}/>

        <label htmlFor="price" className={styles.label}>Price:</label>
        <input name="price" type="number" className={styles.input}/>

        <label htmlFor="image" className={styles.label}>Image</label>
        <input name="image" type="file" className={styles.input}/>

        <button onClick={handleClose} type="button" className={styles.closeModalBtn}>Close</button>
        <button type="button" className={styles.successBtn}>Add Meal</button>
       </form>
      </ReactModal>
    );
  }
}

export default AddMealModal;
