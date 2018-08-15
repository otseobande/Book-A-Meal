import React from 'react';
import PropTypes from 'prop-types';
import CustomerLinks from './CustomerLinks.js';
import CatererLinks from './CatererLinks.js';

const AuthLinks = ({ role, pathname }) => (
  role === 'customer' ?
    <CustomerLinks pathname={pathname} /> :
    <CatererLinks pathname={pathname} />
);

AuthLinks.propTypes = {
  role: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default AuthLinks;
