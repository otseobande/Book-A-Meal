import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

const CustomerLinks = ({ pathname }) => (
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
      <Link
        className={classNames({
          [styles.active]: pathname === '/orders'
        })}
        to="/orders"
      >
        Order history
      </Link>
    </li>
  </Fragment>
);

export default CustomerLinks;
