import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './meal-card.scss';

const MealCard = ({meal, order, edit}) => (
  <div className={styles.card}>
    <div className={styles.image}>
      <img src={meal.img} alt="meal" />
    </div>
    <div className={styles.body}>
      <div className={styles.title}>
        {meal.title}
      </div>
      <div className={styles.description}>
        {meal.description}
      </div>
    </div>
    <div className={styles.footer}>
      <span>
        <b>Price</b>: &#8358;{meal.price}
      </span>
      <div className={styles.actions}>
        {order && <Link className={styles.orderBtn} to={`meal/${meal.id}/order`}>Order</Link>}
        {
          edit &&
          <Fragment>
            <Link className={styles.orderBtn} to={`meal/${meal.id}/edit`}>Edit</Link>
            <Link className={styles.orderBtn} to="/">Delete</Link>
          </Fragment>
        }
      </div>
    </div>
  </div>
);


MealCard.propTypes = {
  meal: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    order: PropTypes.bool,
    edit: PropTypes.bool
  }).isRequired
};


MealCard.defaultProps = {
  order: false,
  edit: false
};

export default MealCard;
