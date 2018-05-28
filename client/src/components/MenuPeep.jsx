import React, { Component } from 'react';
import MealCard from './MealCard.jsx';
import FriedRiceImg from '../assets/img/fried-rice.jpg';

class MenuPeep extends Component{
  render() {
    return (
      <div className="content">   
        <div className="menu-peak">
          <span>~~  </span><span><b>Peep into today's menu</b></span><span>  ~~</span>
        </div>
        <div className="meals">
          <MealCard image={FriedRiceImg} description="delicious meal" title="fried-rice" price="3000" />
        </div>
      </div>
    )
  }
}

export default MenuPeep;