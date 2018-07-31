import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MealCard from '../MealCard/MealCard.js';
import styles from './menus.scss';
import rightArrow from '../../../assets/img/right-arrow.svg';
import downArrow from '../../../assets/img/down-arrow.svg';
import OrderModal from '../OrderModal/OrderModal.js';

/**
 * @class MealDropDown
 *
 */
class MealDropDown extends Component {
  static propTypes = {
    meal: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string, PropTypes.number
    ])).isRequired
  }

  state = {
    droppedDown: false,
    showModal: false
  }

  handleOpenModal = (event) => {
    event.stopPropagation();

    this.setState({
      showModal: true
    });
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    });
  }

  dropDown = () => {
    this.setState(prevState => ({ droppedDown: !prevState.droppedDown }));
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    const { meal } = this.props;
    const arrow = this.state.droppedDown ? downArrow : rightArrow;

    return (
      <div className={styles.meal}>
        {/* eslint-disable  */}
        <div className={styles.mealTitle} onClick={this.dropDown}>
        * {meal.title}
          <div className={styles.leftSection}>
            <button className={styles.orderBtn} onClick={this.handleOpenModal}>Order</button>
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
          isOpen={this.state.showModal}
          handleClose={this.handleCloseModal}
          meal={this.props.meal}
        />
      </div>
    );
  }
}

export default MealDropDown;
