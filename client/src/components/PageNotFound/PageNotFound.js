import React from 'react';
import lost from '../../../assets/img/lost.svg';
import styles from './pagenotfound.scss';

export default () => (
  <div className={styles.background}>
    <div className={styles.notFound}>
      <img
        src={lost}
        width="150"
        alt="not found"
        className={styles.image}
      />
      <p>Page not found</p>
    </div>
  </div>
);
