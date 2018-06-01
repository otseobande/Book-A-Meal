import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayMeals from './DisplayMeals.jsx';
import LoadingMeals from './LoadingMeals.jsx';

const MenuPeep = ({loading, meals}) => (
  <div className="content">   
    <div className="menu-peak">
      <span>~~  </span>
      <span>
        <b>Peep into today's menus</b>
      </span>
      <span>  ~~</span>
    </div>
    { loading ? <LoadingMeals /> : <DisplayMeals meals={meals} /> }
  </div>
)

MenuPeep.propTypes = {
  meals: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default MenuPeep;