import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageLink from './PageLink.js';

const CatererLinks = ({ pathname }) => (
  <Fragment>
    <li>
      <PageLink to="/manage-meals" text="Meals" pathname={pathname} />
    </li>
    <li>
      <PageLink to="/manage-menus" text="Menus" pathname={pathname} />
    </li>
    <li>
      <PageLink to="/manage-orders" text="Orders" pathname={pathname} />
    </li>
  </Fragment>
);

CatererLinks.propTypes = {
  pathname: PropTypes.string.isRequired
};

export default CatererLinks;
