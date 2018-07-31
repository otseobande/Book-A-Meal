import React, { Fragment } from 'react';
import CustomerLinks from './CustomerLinks.js';
import { Link } from 'react-router-dom';

const AuthLinks = ({ role, pathname }) => {
  //if (role === 'customer') {
    return (
      <CustomerLinks
        pathname={pathname}
      />
    );
  //}
};

export default AuthLinks;
