import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayMeals from '../../DisplayMeals/DisplayMeals.js';
import LoadingMeals from '../../Loader.js';
import styles from './menu-peep.scss';

/**
 * @class MenuPeep
 */
class MenuPeep extends Component {
  /**
   * @returns {undefined} - undefined
   */
  componentDidMount() {
    this.props.getMealsForTheDay();
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    return (
      <div className={styles.peep}>
        <div className={styles.heading}>
          <span>~~ <b>Peep into today&#39;s menus</b> ~~</span>
        </div>
        { this.props.loading ? <LoadingMeals message="loading..." /> : <DisplayMeals meals={this.props.meals} /> }
      </div>
    );
  }
}


MenuPeep.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMealsForTheDay: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default MenuPeep;