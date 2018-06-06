import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home/index.jsx';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
