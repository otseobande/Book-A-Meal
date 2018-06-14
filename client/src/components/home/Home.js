import React, { Fragment } from 'react';
import Welcome from './Welcome/Welcome.js';
import Footer from '../Layout/Footer/Footer.js';
import MenuPeepContainer from './MenuPeep/MenuPeepContainer.js';
// import '../../../assets/css/index.css';
// import '../../../assets/css/style.css';

const Home = () => (
  <Fragment>
    <div style={{ flex: 1 }}>
      <Welcome />
      <MenuPeepContainer />
    </div>
    <Footer />
  </Fragment>
);

export default Home;
