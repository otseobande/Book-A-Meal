import React from 'react';
import PropTypes from 'prop-types';
import styles from '../set-menu.scss';
import CategoryTitleOptionsSelect from './CategoryTitleOptionsSelect';
import DisplayMealCheckboxes from './DisplayMealCheckboxes';

const SetMenuCategory = (props) => {
  const categoryMealIds = props.category.meals.map(meal => meal.id);
  return (
    <div className={styles.menuCategory}>
      <CategoryTitleOptionsSelect
        selectedTitles={props.selectedTitles}
        value={props.category.title}
        handleChange={props.handleCategoryTitleChange}
        removeCategory={props.removeCategory}
        categoryCount={props.categoryCount}
        errors={props.errors}
        categoryIndex={props.categoryIndex}
      />
      <DisplayMealCheckboxes
        meals={props.meals}
        categoryMealIds={categoryMealIds}
        toggleMealInCategory={props.toggleMealInCategory}
        errors={props.errors}
        categoryIndex={props.categoryIndex}
      />
    </div>
  );
};
SetMenuCategory.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCategory: PropTypes.func.isRequired,
  categoryCount: PropTypes.number.isRequired,
  category: PropTypes.shape({
    meals: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string
  }).isRequired,
  toggleMealInCategory: PropTypes.func.isRequired,
  handleCategoryTitleChange: PropTypes.func.isRequired,
  selectedTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  categoryIndex: PropTypes.number.isRequired
};

export default SetMenuCategory;
