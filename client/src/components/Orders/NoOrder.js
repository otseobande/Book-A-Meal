import React from 'react';
import orderServed from '../../../assets/img/order-served.svg';
import styles from './no-order.scss';

const NoOrder = () => (
  <div className={styles.container}>
    <img
      src={orderServed}
      width="150"
      alt="No order"
    />

    <p className={styles.text}>No order has been placed</p>
  </div>
);

export default NoOrder;
