import React from 'react';
import PropTypes from 'prop-types';
import styles from './load-more.scss';

const LoadMore = ({ handleClick }) => (
  <div className={styles.container}>
    <button
      className={styles.loadMoreBtn}
      onClick={handleClick}
    >
      Load more
    </button>
  </div>
);

LoadMore.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default LoadMore;
