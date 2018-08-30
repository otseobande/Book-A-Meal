import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageLink from './PageLink.js';

const CustomerLinks = ({ pathname }) => (
  <Fragment>
    <li>
      <PageLink to="/menus" text="Menus" pathname={pathname} />
    </li>
    <li>
      <PageLink to="/orders" text="Order history" pathname={pathname} />
    </li>
  </Fragment>
);

CustomerLinks.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default CustomerLinks;
