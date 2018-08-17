import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import cancelIcon from '../../../../../assets/img/cancel-icon.svg';
import styles from '../set-menu.scss';

const RemoveCategoryButton = ({
  handleRemoveCategory
}) => (
  <button
    className={classnames(styles.iconBtn, styles.right)}
    onClick={handleRemoveCategory}
  >
    <img src={cancelIcon} width="15" alt="cancel" />
  </button>
);

RemoveCategoryButton.propTypes = {
  handleRemoveCategory: PropTypes.func.isRequired
};

export default RemoveCategoryButton;
