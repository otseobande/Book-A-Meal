import React, { Component } from 'react';
import MealCard from '../MealCard/MealCard.js';
import styles from './menus.scss';
import rightArrow from '../../../assets/img/right-arrow.svg';
import downArrow from '../../../assets/img/down-arrow.svg';

/**
 * @class MealDropDown
 */
class MealDropDown extends Component {
  state = {
    droppedDown: false
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    const { meal } = this.props;
    return (
      <div className={styles.meal}>
        <div className={styles.mealTitle}>
      * Quaker oats
          <img className={styles.img} src={downArrow} alt="down-arrow" />
        </div>
        <MealCard
          className={styles.mealCard}
          action="order"
          meal={meal}
        />
      </div>
    );
  }
}

export default MealDropDown;
