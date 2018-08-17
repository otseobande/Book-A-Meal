import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar/NavBarContainer.js';
import Footer from './Footer/Footer.js';
import styles from './layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <div className={styles.layout}>
      <NavBar />
      {children}
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
