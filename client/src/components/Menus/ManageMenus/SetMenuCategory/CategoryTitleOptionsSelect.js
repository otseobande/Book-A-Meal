import React from 'react';
import PropTypes from 'prop-types';
import categoryTitles from '../categoryTitles.js';
import styles from '../set-menu.scss';
import RemoveCategoryButton from './RemoveCategoryButton.js';

const CategoryTitleOptionsSelect = ({
  selectedTitles,
  handleChange,
  removeCategory,
  categoryCount,
  value,
  errors,
  categoryIndex
}) => {
  const error = errors[`categories[${categoryIndex}].title`];

  return (
    <label htmlFor="title" className={styles.label}>
      <div className={styles.title}>
      Category title:
        {
        categoryCount > 1 &&
        <RemoveCategoryButton
          handleRemoveCategory={removeCategory}
        />
      }
      </div>
      <select
        className={error ? styles.inputError : styles.input}
        name="title"
        onChange={handleChange}
        value={value}
      >
        <option value="" disabled>Select a category</option>
        {
        categoryTitles.map((title, index) => (
          <option
            key={index.toString()}
            value={title}
            disabled={selectedTitles.includes(title) ? 'disabled' : ''}
          >
            {title}
          </option>
        ))
      }
      </select>
      {
        error &&
        <div className={styles.errorMessage}>{error}</div>
      }
    </label>
  );
};

CategoryTitleOptionsSelect.propTypes = {
  selectedTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  removeCategory: PropTypes.func.isRequired,
  categoryCount: PropTypes.number.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  categoryIndex: PropTypes.number.isRequired
};
export default CategoryTitleOptionsSelect;
