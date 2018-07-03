import React, { Fragment } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './meal-card.scss';

const MealCard = ({
  meal,
  action,
  handleDelete,
  className: addedClassName
}) => (
  <div className={classnames(styles.card, addedClassName)}>
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
        <b>Price</b>:
          &#8358;
        {
            meal.price
                .toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
          }
      </span>
      <div className={styles.actions}>
        {
          action === 'order' &&
          <Link className={styles.orderBtn} to={`meal/${meal.id}/order`}>Order</Link>}
        {
          action === 'edit' &&
          <Fragment>
            <Link className={styles.orderBtn} to={`meal/${meal.id}/edit`}>Edit</Link>
            <button className={styles.orderBtn} onClick={handleDelete}>Delete</button>
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
    price: PropTypes.number.isRequired
  }).isRequired,
  action: PropTypes.string,
  className: PropTypes.string,
  handleDelete: PropTypes.func
};


MealCard.defaultProps = {
  action: '',
  className: '',
  handleDelete: () => {}
};

export default MealCard;
