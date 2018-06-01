import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MealCard = (props) =>  (
  <div className="card">
    <div className="card-img">
      <img src={props.image} />
    </div>
    <div className="card-body">
      <div className="card-title">{props.title}</div>
      <div className="card-description">
        {props.description}
      </div>
    </div>
    <div className="card-footer">
      <span>
        <b>Price</b>: &#8358;{props.price}
      </span>
      <div className="card-options">
        <a className="order-btn" href="login.html">Order</a>
      </div>
    </div>
  </div>
)

MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default MealCare