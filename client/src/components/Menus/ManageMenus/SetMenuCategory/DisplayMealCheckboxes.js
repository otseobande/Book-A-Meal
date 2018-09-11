import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../set-menu.scss';

/**
 * @class DisplayMealCheckboxes
 */
class DisplayMealCheckboxes extends Component {
  handleCheck = meal => () => {
    const { toggleMealInCategory } = this.props;
    toggleMealInCategory(meal);
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    const {
      meals,
      categoryMealIds,
      errors,
      categoryIndex
    } = this.props;

    const error = errors[`categories[${categoryIndex}].meals`];

    return (
      <div>
        <b>Meals:</b>
        <div
          className={classnames({
            [styles.meals]: true,
            [styles.error]: error
          })}
        >
          {
            meals.map(meal => (
              <div key={meal.id}>
                <label className={styles.checkBoxLabel}>
                  {meal.title}
                  <input
                    type="checkbox"
                    checked={categoryMealIds.includes(meal.id) ? 'checked' : ''}
                    onChange={this.handleCheck(meal)}
                  />
                  <span className={styles.checkmark} />
                </label>
              </div>
            ))
          }
        </div>
        {
        error &&
        <div className={styles.mealsErrorMessage}>{error}</div>
      }
      </div>
    );
  }
}

DisplayMealCheckboxes.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleMealInCategory: PropTypes.func.isRequired,
  categoryMealIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  categoryIndex: PropTypes.number.isRequired
};

export default DisplayMealCheckboxes;
