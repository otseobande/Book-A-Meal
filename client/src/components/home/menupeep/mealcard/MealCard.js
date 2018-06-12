import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const MealCard = props => (
  <div className={styles.card}>
    <div className={styles.image}>
      <img src={props.image} alt="meal" />
    </div>
    <div className={styles.body}>
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.description}>
        {props.description}
      </div>
    </div>
    <div className={styles.footer}>
      <span>
        <b>Price</b>: &#8358;{props.price}
      </span>
      <div className={styles.actions}>
        <a className={styles.orderBtn} href="login.html">Order</a>
      </div>
    </div>
  </div>
);


MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default MealCard;
