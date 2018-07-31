import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayMeals from '../../DisplayMeals/DisplayMeals.js';
import Loader from '../../Loader.js';
import styles from './menu-peep.scss';

/**
 * @class MenuPeep
 */
class MenuPeep extends Component {
  /**
   * @returns {undefined} - undefined
   */
  componentDidMount() {
    this.props.peepMenus();
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    const { meals, loggedIn, loading } = this.props;
    return (
      <div className={styles.peep}>
        <div className={styles.heading}>
          <span>~~ <b>Peep into today&#39;s menus</b> ~~</span>
        </div>
        { loading
          ? <Loader />
          : <DisplayMeals loggedIn={loggedIn} meals={meals} /> }
      </div>
    );
  }
}


MenuPeep.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  peepMenus: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

export default MenuPeep;
