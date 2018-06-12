import React, { Fragment } from 'react';
import NavBar from './NavBar/NavBar.js';
import Footer from './Footer/Footer.js';

const Layout = props => (
  <Fragment>
    <NavBar />
    {props.children}
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
};

export default Layout;
