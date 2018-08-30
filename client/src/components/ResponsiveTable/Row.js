import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './responsive-table.scss';

/**
 * @param {Object} props
 *
 * @returns {JSX} React JSX
 */
const Row = (props) => {
  const classNames = classnames({
    [styles.row]: true,
    [styles.header]: props.header
  });

  return (
    <div className={classNames}>
      {props.children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.bool
};

Row.defaultProps = {
  header: false
};

export default Row;
