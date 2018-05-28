import React, { Component } from 'react';
import axios from 'axios';
import MealCard from './MealCard.jsx';
import FriedRiceImg from '../assets/img/fried-rice.jpg';
import loadingCube from '../assets/img/loading-cube.svg';
import steamingFood from '../assets/img/steaming.svg';

class MenuPeep extends Component{
  state = {
    loading: true,
    meals: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/menu')
      .then(res => {
        const { menus } = res.data;
        const meals = menus.reduce((accMeals, menu) => {
          return accMeals.concat(menu.categories.reduce((acc, category) => {
            return acc.concat(category.meals);
          }, []));
        }, []);

        this.setState({meals, loading: false})
      })
      .catch(err => {
        this.setState({loading: false})
        console.log(err)
      })
  }

  render() {
    return (
      <div className="content">   
        <div className="menu-peak">
          <span>~~  </span><span><b>Peep into today's menus</b></span><span>  ~~</span>
        </div>
        {
          this.state.loading ? (
            <div style={{textAlign: 'center'}}>
              <img src={loadingCube} width={100}/><br />
              loading meals...
            </div>
          ):(
              false && this.state.meals.length > 0 
                ? (this.state.meals.map(meal =>
                  <div className="meals"> 
                    <MealCard 
                      key={meal.id} 
                      image={meal.img} 
                      description={meal.description} 
                      title={meal.title} 
                      price={meal.price} />
                  </div>
                )) 
                : (
                  <div style={{textAlign: 'center'}}>
                    <img src={steamingFood} /><br />
                    No menu has been set for the day.<br /> 
                    Our caterers are preparing something amazing!.<br /> 
                    <a href='#'>Sign up as a caterer</a>
                  </div>
                )
          )
        }
      </div>
    )
  }
}

export default MenuPeep;