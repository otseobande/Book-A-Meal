import React from 'react';
import PropTypes from 'prop-types';
import styles from './responsive-table.scss';

/**
 * @param {Object} props Component props
 *
 * @returns {JSX} React JSX
 */
const Cell = props => (
  <div className={styles.cell} data-title={props.title}>
    {props.children}
  </div>
);

Cell.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

Cell.defaultProps = {
  title: ''
};

export default Cell;
