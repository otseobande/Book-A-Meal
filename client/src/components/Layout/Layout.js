import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBarContainer.js';
import Footer from './Footer/Footer.js';

const Layout = props => (
  <Fragment>
    <div style={{ flex: 1 }}>
      <NavBar />
      {props.children}
    </div>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
