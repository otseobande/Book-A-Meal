import React, { Fragment } from 'react';
import Overdrive from 'react-overdrive';
import Welcome from './Welcome/Welcome.js';
import Footer from '../Layout/Footer/Footer.js';
import MenuPeepContainer from './MenuPeep/MenuPeepContainer.js';

const Home = () => (
  <Fragment>
    <div style={{ flex: 1 }}>
      <div>
        <Overdrive id="page">
          <Fragment>
            <Welcome />
            <MenuPeepContainer />
          </Fragment>
        </Overdrive>
      </div>
    </div>
    <Footer />
  </Fragment>
);

export default Home;
