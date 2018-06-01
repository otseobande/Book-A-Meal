import React, { Component } from 'react';
import steamingFood from '../../../assets/img/steaming.svg';

const NoMeal = () => (
  <div style={{textAlign: 'center'}}>
    <img src={steamingFood} /><br />
    No menu has been set for the day.<br /> 
    Our caterers are preparing something amazing!.<br /><br /> 
    <a href='#'>Sign up</a> to be notified when menus are set
  </div>
)

export default NoMeal;