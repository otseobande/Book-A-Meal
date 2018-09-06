import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import NoMenu from '../NoMenu/NoMenu.js';
import MenuCategory from './MenuCategory.js';
import MenuNavigator from './MenuNavigator.js';
import styles from './menus.scss';

/**
 * @class MenuDisplay
 */
class MenuDisplay extends Component {
  static propTypes = {
    menus: PropTypes.arrayOf(PropTypes.object).isRequired,
    loggedIn: PropTypes.bool.isRequired
  }

  state = {
    currentMenuIndex: 0
  }

  goToNextMenu = () => {
    const { currentMenuIndex } = this.state;

    if (this.nextExists()) {
      this.flipMenuBody();
      this.setState({ currentMenuIndex: currentMenuIndex + 1 });
    }
  }

  goToPrevMenu = () => {
    const { currentMenuIndex } = this.state;

    if (this.prevExists()) {
      this.flipMenuBody();

      this.setState({ currentMenuIndex: currentMenuIndex - 1 });
    }
  }

  prevExists = () => {
    const { currentMenuIndex } = this.state;

    return currentMenuIndex > 0;
  }

  nextExists = () => {
    const { currentMenuIndex } = this.state;
    const { menus } = this.props;

    return currentMenuIndex < menus.length - 1;
  }

  /**
   * @return {undefined} undefined
   */
  flipMenuBody() {
    this.menuBody.classList.toggle(styles.flipIn);
    setTimeout(() => this.menuBody.classList.toggle(styles.flipIn), 400);
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { currentMenuIndex } = this.state;
    const { menus, loggedIn } = this.props;

    return isEmpty(menus) ?
      <div className={styles.noMenu}>
        <NoMenu loggedIn={loggedIn} />
      </div> :
      <div className={styles.slideInUp}>
        <MenuNavigator
          prevExists={this.prevExists}
          nextExists={this.nextExists}
          goToNextMenu={this.goToNextMenu}
          goToPrevMenu={this.goToPrevMenu}
        />
        <div ref={el => this.menuBody = el} className={styles.menuBody}>
          <div className={styles.catererName}>
            {menus[currentMenuIndex].caterer.username}&apos;s menu
          </div>
          {
            menus[currentMenuIndex].categories.map(category => (
              <MenuCategory key={category.id} category={category} />
            ))
          }
        </div>
      </div>;
  }
}

export default MenuDisplay;
