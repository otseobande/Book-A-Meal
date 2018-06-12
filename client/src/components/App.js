import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home/Home.js';
import PageNotFound from './PageNotFound/PageNotFound.js';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
