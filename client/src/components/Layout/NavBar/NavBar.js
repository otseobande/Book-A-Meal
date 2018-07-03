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
    pathname: PropTypes.string.isRequired
  }
  static defaultProps = {
    home: false,
    loggedIn: false
  }
  state = {
    isNavMenuVisible: false
  }

  /**
   * @returns {undefined} - undefined
   */
  toggleMenu() {
    this.setState({
      isNavMenuVisible: !this.state.isNavMenuVisible
    });
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    const { pathname } = this.props;

    return (
      <nav className={classNames({
        [styles.nav]: true,
        [styles.home]: this.props.home
      })}
      >
        <div className={styles.titleArea}>
          <Link to="/" className={styles.title}>
            <img className={styles.logo} src={logo} width="30" alt="logo" />
            <span className={styles.appName}>Book-A-Meal</span>
          </Link>
          <button className={styles.navToggle} onClick={() => this.toggleMenu()} href="#">&#9776;</button>
        </div>
        <div
          className={classNames({
            [styles.navMenus]: true,
            [styles.visible]: this.state.isNavMenuVisible
          })}
        >
          <ul className={styles.navList}>
            {
              this.props.loggedIn
              ? (
                <Fragment>
                  <li>
                    <Link
                      className={classNames({
                        [styles.active]: pathname === '/menus'
                      })}
                      to="/menus"
                    >
                      Menus
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={this.props.logout}>Logout</Link>
                  </li>
                </Fragment>
              )
              :
                <AuthLinks />
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
