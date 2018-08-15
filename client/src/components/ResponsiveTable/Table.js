import React from 'react';
import PropTypes from 'prop-types';
import styles from './responsive-table.scss';

/**
 *
 * @param {Object} props
 *
 * @returns {JSX} React JSX
 */
const Table = props => (
  <div className={styles.table}>
    {props.children}
  </div>
);

Table.propTypes = {
  children: PropTypes.node.isRequired
};

export default Table;
