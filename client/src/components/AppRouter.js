import React from 'react';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import history from '../history.js';
import GuardedTitledRoute from './GuardedTitledRoute.js';
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
import TitledRoute from './TitledRoute.js';

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <TitledRoute exact path="/" title="Home" component={Home} />
      <GuardedTitledRoute path="/login" title="Login" component={Login} />
      <GuardedTitledRoute path="/signup" title="Sign up" component={SignUp} />
      <GuardedTitledRoute exact path="/reset_password" title="Reset password" component={ResetPassword} />
      <TitledRoute path="/reset_password/:token" title="Change password" component={ChangePassword} />

      <Layout>
        <Switch>
          <GuardedTitledRoute path="/menus" title="Menus" allow="customer" component={MenusContainer} />
          <GuardedTitledRoute path="/orders" title="Order history" allow="customer" component={OrderHistoryContainer} />
          <GuardedTitledRoute path="/manage-menus" title="Manage menus" allow="caterer" component={ManageMenusContainer} />
          <GuardedTitledRoute path="/manage-meals" title="Manage meals" allow="caterer" component={MealsContainer} />
          <GuardedTitledRoute path="/manage-orders" title="Manage orders" allow="caterer" component={CatererOrderHistory} />
          <TitledRoute title="Page not found" component={PageNotFound} />
        </Switch>
      </Layout>
    </Switch>
  </ConnectedRouter>
);

export default AppRouter;
