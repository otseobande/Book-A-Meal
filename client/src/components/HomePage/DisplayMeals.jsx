import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoMeal from './NoMeal.jsx';

const DisplayMeals = (props) => (
  props.meals.length > 0 
    ? <div className="meals">
        {
          props.meals.map(meal => (
            <MealCard 
              key={meal.id} 
              image={meal.img} 
              description={meal.description} 
              title={meal.title} 
              price={meal.price} 
            />
          ))
        }
      </div>
    : <NoMeal /> 
)

DisplayMeals.propTypes = {
  meals: PropTypes.array.isRequired
}

export default DisplayMeals;