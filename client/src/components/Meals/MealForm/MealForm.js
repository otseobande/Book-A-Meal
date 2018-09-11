import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../../Form/InputField.js';
import MealFormButtons from './MealFormButtons.js';
import styles from './meal-form.scss';

/**
 * @class MealForm
 */
class MealForm extends Component {
  static propTypes = {
    values: PropTypes.objectOf(PropTypes.string),
    touched: PropTypes.objectOf(PropTypes.bool),
    errors: PropTypes.objectOf(PropTypes.string),
    isSubmitting: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    setFieldValue: PropTypes.func.isRequired
  };

  static defaultProps = {
    values: {},
    touched: {},
    errors: {},
    isSubmitting: false,
    handleBlur() {}
  };

  handleImageChange = (event) => {
    this.props.setFieldValue('image', event.currentTarget.files[0]);
  }

  /**
   * @returns {JSX} React JSX
   */
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h2>Meal details</h2>
        <InputField name="title" label="Title" {...this.props} />
        <InputField name="description" label="Description" {...this.props} />
        <InputField name="price" label="Price" type="number" {...this.props} />
        <label htmlFor="image" className={styles.label}>
          {this.props.values.img ? 'Change image:' : 'Upload image:' }
          <input
            name="image"
            type="file"
            className={styles.fileInput}
            onChange={this.handleImageChange}
            onBlur={this.props.handleBlur}
          />
        </label>
        { this.props.values.img && <img src={this.props.values.img} width="80" alt="meal" /> }
        <MealFormButtons
          isSubmitting={this.props.isSubmitting}
          handleClose={this.props.handleClose}
          handleSubmit={this.props.handleSubmit}
        />
      </form>
    );
  }
}

export default MealForm;
