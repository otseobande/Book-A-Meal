import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/img/logo.svg';
import styles from './auth.scss';

const AuthArea = props => (
  <div className={styles.authArea}>
    <div className={styles.title}>
      <Link to="/">
        <img src={logo} alt="logo" />
        <h1 className={styles.title}>Book-A-Meal</h1>
      </Link>
    </div>
    <div className={styles.authCard}>
      {props.children}
    </div>
  </div>
);

AuthArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthArea;
