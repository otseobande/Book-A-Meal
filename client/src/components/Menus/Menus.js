import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import MenuDisplay from './MenuDisplay.js';
import Loader from '../Loader.js';
import styles from './menus.scss';

/**
 * @class Menus
 */
class Menus extends Component {
  static propTypes = {
    getMenusForTheDay: PropTypes.func.isRequired,
    menus: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired
  }

  /**
   * @returns {undefined} undefined
   */
  componentDidMount() {
    this.props.getMenusForTheDay();
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { loading, menus, loggedIn } = this.props;

    return (
      <DocumentTitle title="Menus - Book-A-Meal">
        <div className={styles.menu}>
          <h2 className={styles.menuHeader}>~ Menus for the day ~</h2>
          {
            loading ?
              <Loader /> :
              <MenuDisplay
                menus={menus}
                loggedIn={loggedIn}
              />
          }
        </div>
      </DocumentTitle>
    );
  }
}

export default Menus;
