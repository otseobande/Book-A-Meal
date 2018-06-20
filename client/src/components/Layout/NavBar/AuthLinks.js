import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AuthLinks = () => (
  <Fragment>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/signup">Sign Up</Link>
    </li>
  </Fragment>
);

export default AuthLinks;
