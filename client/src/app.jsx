import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') // eslint-disable-line no-undef
);
