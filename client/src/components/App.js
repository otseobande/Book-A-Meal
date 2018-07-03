import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'normalize.css';
import 'animate.css/animate.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import '../../assets/css/app.css';
import AppRouter from './AppRouter.js';

const App = () => (
  <Fragment>
    <ToastContainer />
    <AppRouter />
  </Fragment>
);

export default App;
