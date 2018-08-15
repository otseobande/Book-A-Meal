import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout.js';
import Loader from '../Loader.js';
import DisplayMealCards from './DisplayMealCards.js';
import styles from './meals.scss';
import AddMealModal from './AddMealModal/AddMealModal.js';

/**
 * @class Meal
 */
class Meal extends Component {
  static propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired,
    isFetching: PropTypes.bool.isRequired,
    getMeals: PropTypes.func.isRequired
  }

  state = {
    addMealModalIsOpen: false
  }

  /**
   * @returns {undefined} undefined
   */
  componentDidMount() {
    this.props.getMeals();
  }

  openAddMealModal = () => {
    this.setState({ addMealModalIsOpen: true });
  }

  closeAddMealModal = () => {
    this.setState({ addMealModalIsOpen: false });
  }
  /**
   * @returns {JSX} React JSX
   */
  render() {
    const { meals, isFetching } = this.props;
    return (
      <Layout>
        <div className={styles.container}>
          <h2>Manage Meals</h2>
          <button className={styles.btn} onClick={this.openAddMealModal}>Add meal</button>
          {isFetching ? <Loader /> : <DisplayMealCards meals={meals} />}
          <AddMealModal isOpen={this.state.addMealModalIsOpen} handleClose={this.closeAddMealModal} />
        </div>
      </Layout>
    );
  }
}

export default Meal;
