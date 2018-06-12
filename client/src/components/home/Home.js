import React, { Fragment } from 'react';
import Welcome from './Welcome/Welcome.js';
import Footer from '../shared/Layout/Footer/Footer.js';
import MenuPeepContainer from './MenuPeep/MenuPeepContainer.js';
import '../../../assets/css/index.css';
import '../../../assets/css/style.css';

const Home = () => (
  <Fragment>
    <Welcome />
    <MenuPeepContainer />
    <Footer />
  </Fragment>
);

export default Home;
