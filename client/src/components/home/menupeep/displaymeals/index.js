import React from 'react';
import PropTypes from 'prop-types';
import MealCard from '../mealcard';
import NoMeal from '../nomeal.jsx';
import styles from './style.scss';

const DisplayMeals = (props) => {
  if (props.meals.length > 0) {
    return (
      <div className={styles.meals}>
        {props.meals.map(meal => (
          <MealCard
            key={meal.id}
            image={meal.img}
            description={meal.description}
            title={meal.title}
            price={meal.price}
          />))
        }
      </div>
    );
  }
  return <NoMeal />;
};

DisplayMeals.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DisplayMeals;
