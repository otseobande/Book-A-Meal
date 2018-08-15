import React from 'react';
import PropTypes from 'prop-types';
import MealCard from '../MealCard/MealCard.js';
import styles from './meals.scss';

const DisplayMealCards = ({
  meals
}) => (
  <div className={styles.grid}>
    {meals.map(meal => <MealCard meal={meal} />)}
  </div>
);

DisplayMealCards.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DisplayMealCards;
