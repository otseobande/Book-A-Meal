import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';
import Home from './Home/Home.js';
import Layout from './Layout/Layout.js';
import PageNotFound from './PageNotFound/PageNotFound.js';
import './app.css';
import SignUp from './auth/SignUp/SignUp.js';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Layout>
          <Route component={PageNotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  </Fragment>
);

export default App;
