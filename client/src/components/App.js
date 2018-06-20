import React, { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import './app.css';
import AppRouter from './AppRouter.js';

const App = () => (
  <Fragment>
    <ToastContainer />
    <AppRouter />
  </Fragment>
);

export default App;
