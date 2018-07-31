import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OrderModal from '../OrderModal/OrderModal.js';
import localizeNum from '../../utils/localizeNum.js';
import styles from './meal-card.scss';

/**
 * @class MealCard
 */
class MealCard extends Component {
  static propTypes = {
    meal: PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired,
    action: PropTypes.string,
    loggedIn: PropTypes.bool.isRequired,
    className: PropTypes.string,
    handleDelete: PropTypes.func
  };

  static defaultProps = {
    action: '',
    className: '',
    loggedIn: false,
    handleDelete: () => {}
  };

  state = {
    showOrderModal: false
  }

  handleOpenOrderModal = () => {
    this.setState({ showOrderModal: true });
  }

  handleCloseOrderModal = () => {
    this.setState({ showOrderModal: false });
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const {
      meal,
      action,
      handleDelete,
      loggedIn,
      className: addedClassName
    } = this.props;

    return (
      <div className={classnames(styles.card, addedClassName)}>
        <div className={styles.image}>
          <img src={meal.img} alt="meal" />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>
            {meal.title}
          </div>
          <div className={styles.description}>
            {meal.description}
          </div>
        </div>
        <div className={styles.footer}>
          <span>
            <b>Price</b>: &#8358;{localizeNum(meal.price)}
          </span>
          <div className={styles.actions}>
            {
          action === 'order' &&
          <button className={styles.orderBtn} onClick={this.handleOpenOrderModal}>Order</button>}
            {
          action === 'edit' &&
          <Fragment>
            <Link className={styles.orderBtn} to="/">Edit</Link>
            <button className={styles.orderBtn} onClick={handleDelete}>Delete</button>
          </Fragment>
        }
          </div>
        </div>
        <OrderModal
          isOpen={this.state.showOrderModal}
          handleClose={this.handleCloseOrderModal}
          meal={meal}
        />
      </div>
    );
  }
}


export default MealCard;
