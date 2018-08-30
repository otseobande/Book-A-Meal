import React from 'react';
import menuImage from '../../../../assets/img/menu.svg';
import styles from './no-menu.scss';

const NoMenu = () => (
  <div className={styles.container}>
    <img
      src={menuImage}
      width="150"
      alt="no menu"
    />
    <p className={styles.text}>Hungry customers are waiting. Set a menu!</p>
  </div>
);

export default NoMenu;

