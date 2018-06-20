import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import AuthLinks from './AuthLinks.js';
import logo from '../../../../assets/img/logo-white.svg';
import styles from './navbar.scss';

/**
 * @class NavBar
 */
class NavBar extends Component {
  static propTypes = {
    home: PropTypes.bool,
    loggedIn: PropTypes.bool,
    logout: PropTypes.func.isRequired,
    user: PropTypes.object
  }
  static defaultProps = {
    home: false,
    loggedIn: false,
    user: {}
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
            {this.props.loggedIn ? (
              <Fragment>
                <li>
                  <Link to="/">Hi {this.props.user.fullName}</Link>
                </li>
                <li>
                  <Link to="/" onClick={this.props.logout}>Logout</Link>
                </li>
              </Fragment>
            ) : <AuthLinks />
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
