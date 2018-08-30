import React from 'react';
import pot from '../../../assets/img/pot.svg';
import styles from './no-meal-set.scss';

const NoMealSet = () => (
  <div className={styles.container}>
    <img src={pot} width="150" alt="meal cooking" />
    <p className={styles.text}>No meal has been added.</p>
  </div>
);

export default NoMealSet;
