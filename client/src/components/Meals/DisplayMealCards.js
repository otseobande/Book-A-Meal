import React from 'react';
import PropTypes from 'prop-types';
import NoMealSet from './NoMealSet.js';
import MealCard from '../MealCard/MealCardContainer.js';
import styles from './meals.scss';

const DisplayMealCards = ({
  meals
}) => (
  <div className={styles.grid}>
    {
      meals.length > 0 ?
      meals.map(meal => (
        <MealCard
          key={meal.id}
          meal={meal}
          action="edit"
        />
      )) :
      <NoMealSet />
    }
  </div>
);

DisplayMealCards.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DisplayMealCards;
