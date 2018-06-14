import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../../../assets/img/logo-white.svg';
import styles from './style.scss';

/**
 * @class NavBar
 */
class NavBar extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    home: PropTypes.bool
  }
  static defaultProps = {
    backgroundColor: '#d24e24',
    home: false
  }
  state = {
    isNavMenuVisible: false,
    navMenuClasses: classNames({
      [styles['nav-menus']]: true
    })

  }

  navClasses = classNames({
    [styles.nav]: true,
    [styles.home]: this.props.home
  })

  /**
   * @returns {undefined} - undefined
   */
  toggleMenu() {
    this.setState({
      isNavMenuVisible: !this.state.isNavMenuVisible,
      navMenuClasses: classNames({
        [styles['nav-menus']]: true,
        [styles.visible]: !this.state.isNavMenuVisible
      })
    });
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    return (
      <nav className={this.navClasses}>
        <div className={styles['title-area']}>
          <Link to="/" className={styles.title}>
            <img className={styles.logo} src={logo} width="30" alt="logo" />
            <span className={styles['app-name']}>Book-A-Meal</span>
          </Link>
          <button className={styles.navToggle} onClick={() => this.toggleMenu()} href="#">&#9776;</button>
        </div>
        <div className={this.state.navMenuClasses}>
          <ul className={styles['nav-list']}>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
