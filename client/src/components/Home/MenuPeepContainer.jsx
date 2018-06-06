import React, { Component } from 'react';
import axios from 'axios';
import MenuPeep from './MenuPeep.jsx';

class MenuPeepContainer extends Component{
  state = {
    loading: false,
    meals: []
  }

  componentDidMount() {
    this.setState({loading: true});

    axios.get(`${APP_URL}/api/v1/menu`)
      .then(res => {
        const { menus } = res.data;
        const meals = menus.reduce((todaysMeals, menu) => {
          return todaysMeals.concat(menu.categories.reduce((menuMeals, category) => {
            return menuMeals.concat(category.meals);
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
    return <MenuPeep {...this.state}/>
  }
}




export default MenuPeepContainer;