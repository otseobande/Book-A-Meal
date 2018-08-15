import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import history from '../history.js';
import GuardedRoute from './GuardedRoute.js';
import Home from './Home/Home.js';
import Menus from './Menus/MenusContainer.js';
import MealsContainer from './Meals/MealsContainer.js';
import Orders from './Orders/OrderHistoryContainer.js';
import SignUp from './Auth/SignUp/SignUp.js';
import Login from './Auth/Login/Login.js';
import ResetPassword from './Auth/ResetPassword/ResetPasswordContainer.js';
import ChangePassword from './Auth/ResetPassword/ChangePassword/ChangePasswordContainer.js';
import PageNotFound from './PageNotFound/PageNotFound.js';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <GuardedRoute type="guest" path="/login" component={Login} />
      <GuardedRoute type="guest" path="/signup" component={SignUp} />
      <GuardedRoute exact type="guest" path="/reset_password" component={ResetPassword} />
      <Route path="/reset_password/:token" component={ChangePassword} />
      <GuardedRoute path="/menus" component={Menus} />
      <GuardedRoute path="/manage-meals" component={MealsContainer} />
      <GuardedRoute path="/orders" component={Orders} />
      <Route component={PageNotFound} />
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
