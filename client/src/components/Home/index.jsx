import React, { Fragment } from 'react';
import Welcome from './Welcome.jsx';
import Footer from '../layout/Footer.jsx';
import MenuPeepContainer from './MenuPeepContainer.jsx';
import '../../../assets/css/style.css';
import '../../../assets/css/index.css';

const Home = () => (
  <Fragment>
    <Welcome />
    <MenuPeepContainer />
    <Footer />
  </Fragment>
);

export default Home;
