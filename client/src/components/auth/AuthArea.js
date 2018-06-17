import React from 'react';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import logo from '../../../assets/img/logo.svg';
import styles from './auth.scss';

const AuthArea = props => (
  <Overdrive id="page">
    <div className={styles.authArea} style={{ marginTop: '0px' }}>
      <div className={styles.title}>
        <Link to="/">
          <img src={logo} alt="book-a-meal" />
          <h1 className={styles.title}>Book-A-Meal</h1>
        </Link>
      </div>
      {props.children}
    </div>
  </Overdrive>
);

AuthArea.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthArea;
