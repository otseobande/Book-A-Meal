import React, { Fragment } from 'react';
import Welcome from './Welcome/Welcome.js';
import Footer from '../Layout/Footer/Footer.js';
import MenuPeepContainer from './MenuPeep/MenuPeepContainer.js';

const Home = () => (
  <Fragment>
    <div style={{ flex: 1 }}>
      <div>
        <Welcome />
        <MenuPeepContainer />
      </div>
    </div>
    <Footer />
  </Fragment>
);

export default Home;
