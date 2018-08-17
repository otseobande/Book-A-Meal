import React, { Component } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import categoryTitles from './categoryTitles.js';
import SetMenuCategory from './SetMenuCategory/SetMenuCategory.js';
import menuInfoSchema from '../../../utils/validation-schemas/menuInfoSchema.js';
import styles from './set-menu.scss';

/**
 * @class MenuDetailsForm
 */
class MenuDetailsForm extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    meals: PropTypes.arrayOf(PropTypes.object).isRequired,
    date: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    date: '',
    categories: [{
      title: '',
      meals: []
    }]
  }

  state = {
    date: this.props.date,
    categories: this.props.categories,
    errors: {}
  }

  addCategory = () => {
    this.setState(state => ({
      categories: [
        ...state.categories,
        {
          title: '',
          meals: []
        }
      ]
    }));
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value
    });
  }

  handleCategoryTitleChange = index => (event) => {
    const { value } = event.target;

    this.setState((state) => {
      const categories = state.categories.slice();
      categories[index].title = value;

      return {
        categories
      };
    });
  }

  toggleMealInCategory = index => (meal) => {
    this.setState((state) => {
      const categories = state.categories.slice();
      let { meals } = categories[index];

      if (meals.includes(meal)) {
        meals = meals.filter(m => m.id !== meal.id);
      } else {
        meals.push(meal);
      }

      categories[index].meals = meals;
      return {
        categories
      };
    });
  }

  removeCategory = categoryIndex => () => {
    this.setState(state => ({
      categories: state.categories
        .filter((_, index) => index !== categoryIndex)
    }));
  }

  handleSave = () => {
    const { date, categories } = this.state;

    menuInfoSchema.validate({ date, categories }, { abortEarly: false })
      .then(() => {
        const modifiedCategories = categories.map((category) => {
          const modifiedCategory = {
            title: category.title,
            meals: category.meals.map(meal => meal.id).filter(Boolean)
          };

          return modifiedCategory;
        });

        return this.props.handleSave({ date, categories: modifiedCategories });
      })
      .then(this.props.closeModal)
      .catch((error) => {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        this.setState({
          errors
        });
      });
  }

  /**
   * @returns {JSX} React JSX
   * @memberof MenuDetailsForm
   */
  render() {
    const { closeModal, meals, date } = this.props;
    const { errors } = this.state;
    const selectedTitles = this.state.categories.map(c => c.title);

    return (
      meals.length ?
        <div>
          <h2>Menu details</h2>
          {
            date ?
              <h4>{format(date, 'Do MMM, YYYY')}</h4> :
              <label htmlFor="date" className={styles.label}>
                Date:
                <input
                  className={
                    errors.date
                      ? styles.inputError : styles.input}
                  name="date"
                  type="date"
                  min={format(new Date(), 'YYYY-MM-DD')}
                  value={this.state.date}
                  onChange={this.handleDateChange}
                />
                {
                  errors.date &&
                  <div className={styles.errorMessage}>{errors.date}</div>
                }
              </label>
          }

          {
          this.state.categories.map((category, index) => (
            <SetMenuCategory
              removeCategory={this.removeCategory(index)}
              handleCategoryTitleChange={this.handleCategoryTitleChange(index)}
              toggleMealInCategory={this.toggleMealInCategory(index)}
              category={category}
              selectedTitles={selectedTitles}
              categoryCount={this.state.categories.length}
              meals={meals}
              errors={errors}
              categoryIndex={index}
              key={index.toString()}
            />
          ))
        }

          <div className={styles.btns}>
            <div>
              <button
                className={styles.successBtn}
                onClick={this.handleSave}
              >
              Save
              </button>
              {
                this.state.categories.length < categoryTitles.length &&
                <button className={styles.closeModalBtn} onClick={this.addCategory}>
                  Add category
                </button>
              }
            </div>
            <button
              className={styles.closeModalBtn}
              onClick={closeModal}
            >
            Cancel
            </button>
          </div>
        </div> :
        <div className={styles.noMeal}>
          <p>You have not added a meal yet. Please add a meal to create a menu</p>
          <Link to="/manage-meals">Go to meals</Link>
        </div>

    );
  }
}

export default MenuDetailsForm;
