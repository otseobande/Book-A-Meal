import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../storeSetup.js';
import Home from './Home/Home.js';
import Layout from './Layout/Layout.js';
import SignUp from './auth/SignUp/SignUp.js';
import PageNotFound from './PageNotFound/PageNotFound.js';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Layout>
        <Route component={PageNotFound} />
      </Layout>
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
