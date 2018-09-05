import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoMealSet from './NoMealSet.js';
import Loader from '../Loader.js';
import MealCard from '../MealCard/MealCardContainer.js';
import styles from './meals.scss';

/**
 * @class DisplayMealCards
 */
class DisplayMealCards extends Component {
  static propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired,
    getMeals: PropTypes.func.isRequired,
    pagination: PropTypes.objectOf(PropTypes.number).isRequired
  };

  handleLoadMore = () => {
    const { pagination } = this.props;

    this.props.getMeals({
      limit: 10,
      page: pagination.currentPage + 1
    });
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { meals, pagination } = this.props;
    return (
      <InfiniteScroll
        pageStart={1}
        dataLength={meals.length}
        next={this.handleLoadMore}
        initialLoad={false}
        hasMore={pagination.currentPage < pagination.pageCount}
        loader={<Loader />}
        hasChildren={Boolean(meals.length)}
      >
        {
          meals.length ?
            <div className={styles.grid}>
              {meals.map(meal => (
                <MealCard
                  key={meal.id}
                  meal={meal}
                  action="edit"
                />
              ))}
            </div> :
            <NoMealSet />
          }
      </InfiniteScroll>

    );
  }
}

export default DisplayMealCards;
