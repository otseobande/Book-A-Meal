import React, { Fragment } from 'react';
import Welcome from './welcome';
import Footer from '../layout/footer.jsx';
import MenuPeep from './menupeep';
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
