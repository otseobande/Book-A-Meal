import React, { Fragment } from 'react';
import Welcome from './Welcome';
import Footer from '../shared/Footer/index.jsx';
import MenuPeep from './MenuPeep';
import '../../../assets/css/index.css';
import '../../../assets/css/style.css';

const Home = () => (
  <Fragment>
    <Welcome />
    <MenuPeep />
    <Footer />
  </Fragment>
);

export default Home;
