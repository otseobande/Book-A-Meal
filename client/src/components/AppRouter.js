import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import history from '../history.js';
import GuardedRoute from './GuardedRoute.js';
import Home from './Home/Home.js';
import MenusContainer from './Menus/MenusContainer.js';
import ManageMenusContainer from './Menus/ManageMenus/ManageMenusContainer.js';
import MealsContainer from './Meals/MealsContainer.js';
import OrderHistoryContainer from './Orders/OrderHistoryContainer.js';
import CatererOrderHistory from './Orders/CatererOrderHistoryContainer.js';
import SignUp from './Auth/SignUp/SignUp.js';
import Login from './Auth/Login/Login.js';
import ResetPassword from './Auth/ResetPassword/ResetPasswordContainer.js';
import ChangePassword from './Auth/ResetPassword/ChangePassword/ChangePasswordContainer.js';
import PageNotFound from './PageNotFound/PageNotFound.js';
import Layout from './Layout/Layout.js';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <GuardedRoute path="/login" component={Login} />
      <GuardedRoute path="/signup" component={SignUp} />
      <GuardedRoute exact path="/reset_password" component={ResetPassword} />
      <Route path="/reset_password/:token" component={ChangePassword} />

      <Layout>
        <Switch>
          <GuardedRoute path="/menus" allow="customer" component={MenusContainer} />
          <GuardedRoute path="/manage-menus" allow="caterer" component={ManageMenusContainer} />
          <GuardedRoute path="/manage-meals" allow="caterer" component={MealsContainer} />
          <GuardedRoute path="/manage-orders" allow="caterer" component={CatererOrderHistory} />
          <GuardedRoute path="/orders" allow="customer" component={OrderHistoryContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </Layout>
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
