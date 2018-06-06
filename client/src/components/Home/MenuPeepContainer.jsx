import React, { Component } from 'react';
import axios from 'axios';
import MenuPeep from './MenuPeep.jsx';

/**
 * @class MenuPeepContainer
 */
class MenuPeepContainer extends Component {
  state = {
    loading: false,
    meals: []
  };

  /**
   * @returns {undefined} - undefined
   */
  componentDidMount() {
    this.state.loading = true;

    axios.get(`${APP_URL}/api/v1/menu`) // eslint-disable-line no-undef
      .then((res) => {
        const { menus } = res.data;
        const meals = menus.reduce((todaysMeals, menu) =>
          todaysMeals.concat(menu.categories.reduce((menuMeals, category) =>
            menuMeals.concat(category.meals), [])), []);

        this.state.meals = meals;
        this.state.loading = false;
      })
      .catch((err) => {
        this.state.loading = false;
        console.log(err);
      });
  }

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    return <MenuPeep {...this.state} />;
  }
}

export default MenuPeepContainer;
