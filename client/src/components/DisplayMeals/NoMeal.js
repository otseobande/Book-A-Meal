import React from 'react';
import { Link } from 'react-router-dom';
import steamingFood from '../../../assets/img/steaming.svg';

const NoMeal = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={steamingFood} alt="No meal" /><br />
    No menu has been set for the day.<br />
    Our caterers are preparing something amazing!.<br /><br />
    <Link to="/signup">Sign up</Link> to be notified when menus are set
  </div>
);

export default NoMeal;
