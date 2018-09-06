import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    getMeals: PropTypes.func.isRequired,
    pagination: PropTypes.objectOf(PropTypes.number).isRequired
  }

  state = {
    addMealModalIsOpen: false
  }

  /**
   * @returns {undefined} undefined
   */
  componentDidMount() {
    this.props.getMeals({ limit: 10, page: 1 });
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
    const {
      meals, isFetching, pagination, getMeals
    } = this.props;
    return (
      <div className={styles.container}>
        <h2>Manage Meals</h2>
        <button
          className={styles.addMealBtn}
          onClick={this.openAddMealModal}
        >
             Add Meal
        </button>
        {
            isFetching && meals.length < 1 ?
              <Loader /> :
              <DisplayMealCards
                meals={meals}
                pagination={pagination}
                getMeals={getMeals}
              />
          }
        <AddMealModal
          isOpen={this.state.addMealModalIsOpen}
          handleClose={this.closeAddMealModal}
        />
      </div>
    );
  }
}

export default Meal;
