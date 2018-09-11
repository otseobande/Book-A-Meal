import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MealCard from '../MealCard/MealCard.js';
import styles from './menus.scss';
import upArrow from '../../../assets/img/up-arrow.svg';
import downArrow from '../../../assets/img/down-arrow.svg';
import OrderModal from '../Orders/OrderModal/OrderModal.js';

/**
 * @class MealDropDown
 * @param {Object} event Javascript event object
 */
class MealDropDown extends Component {
  static propTypes = {
    meal: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string, PropTypes.number
    ])).isRequired
  }

  state = {
    droppedDown: false,
    showOrderModal: false
  }

  handleOpenOrderModal = (event) => {
    event.stopPropagation();

    this.setState({
      showOrderModal: true
    });
  }

  handleCloseOrderModal = () => {
    this.setState({
      showOrderModal: false
    });
  }

  toggleDropDown = () => {
    this.setState(prevState => ({ droppedDown: !prevState.droppedDown }));
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    const { meal } = this.props;
    const arrow = this.state.droppedDown ? upArrow : downArrow;

    return (
      <div className={styles.meal}>
        <div
          aria-hidden
          role="button"
          className={styles.mealTitle}
          onClick={this.toggleDropDown}
        >
          * {meal.title}
          <div className={styles.leftSection}>
            <button className={styles.orderBtn} onClick={this.handleOpenOrderModal}>Order</button>
            <img className={styles.img} src={arrow} alt="down-arrow" />
          </div>
        </div>
        {this.state.droppedDown &&
          <MealCard
            className={styles.mealCard}
            meal={meal}
          />
        }
        <OrderModal
          isOpen={this.state.showOrderModal}
          handleClose={this.handleCloseOrderModal}
          meal={this.props.meal}
        />
      </div>
    );
  }
}

export default MealDropDown;
