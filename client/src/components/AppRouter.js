import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../storeSetup.js';
import GuardedRoute from './GuardedRoute.js';
import Home from './Home/Home.js';
import Menus from './Menus/Menus.js';
import SignUp from './Auth/SignUp/SignUp.js';
import Login from './Auth/Login/Login.js';
import PageNotFound from './PageNotFound/PageNotFound.js';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <GuardedRoute type="guest" path="/login" component={Login} />
      <GuardedRoute type="guest" path="/signup" component={SignUp} />
      <GuardedRoute path="/menus" component={Menus} />
      <Route component={PageNotFound} />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
