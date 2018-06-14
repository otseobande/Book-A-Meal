import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import MealCard from '../MealCard/MealCard.js';
import NoMeal from './NoMeal.js';
import LoadMoreButton from './LoadMore/LoadMoreButton.js';
import animateWindowScrollBy from '../../utils/animateWindowScrollBy';
import styles from './display-meals.scss';

/**
 * @class DisplayMeals
 */
class DisplayMeals extends Component {
  static propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired
  };
  state = {
    visibleMeals: 4
  }

  /**
   * Displays more meals
   *
   * @returns {undefined}
   */
  displayMore = () => {
    this.setState({
      visibleMeals: this.state.visibleMeals + 4
    });
    animateWindowScrollBy(30, 20);
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    const { meals } = this.props;
    const { visibleMeals } = this.state;

    if (meals.length > 0) {
      return (
        <Fragment>
          <div className={styles.meals}>
            {meals.slice(0, visibleMeals).map((meal, index) => (
              <MealCard
                key={index} // eslint-disable-line react/no-array-index-key
                meal={meal}
                order
              />))
            }
          </div>
          {
            visibleMeals < meals.length
            &&
            <LoadMoreButton handleClick={this.displayMore} />
          }
        </Fragment>
      );
    }
    return <NoMeal />;
  }
}


export default DisplayMeals;
