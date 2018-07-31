import React from 'react';
import PropTypes from 'prop-types';
import MealDropDown from './MealDropDown.js';
import styles from './menus.scss';

const MenuCategory = ({ category }) => (
  <div>
    <h3 className={styles.categoryTitle}>-{category.title}</h3>
    <ul className={styles.mealList}>
      {
        category.meals.map(meal => (
          <li key={meal.id}>
            <MealDropDown meal={meal} />
          </li>
          ))
      }
    </ul>
  </div>
);

MenuCategory.propTypes = {
  category: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])).isRequired
};

export default MenuCategory;
