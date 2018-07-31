import React, { Fragment } from 'react';
import DocumentTitle from 'react-document-title';
import Welcome from './Welcome/Welcome.js';
import Footer from '../Layout/Footer/Footer.js';
import MenuPeepContainer from './MenuPeep/MenuPeepContainer.js';

const Home = () => (
  <DocumentTitle title="Home - Book-A-Meal">
    <Fragment>
      <div style={{ flex: 1 }}>
        <div>
          <Welcome />
          <MenuPeepContainer />
        </div>
      </div>
      <Footer />
    </Fragment>
  </DocumentTitle>
);

export default Home;
