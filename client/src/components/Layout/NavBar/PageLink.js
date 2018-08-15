import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

const PageLink = ({ pathname, to, text }) => (
  <Link
    className={classNames({
      [styles.active]: pathname === to
    })}
    to={to}
  >
    {text}
  </Link>
);

PageLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default PageLink;
