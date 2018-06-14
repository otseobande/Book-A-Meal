import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App.js';
import store from './store';

const renderApp = AppComponent => render(
  <AppContainer>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </AppContainer>,
  document.getElementById('root') // eslint-disable-line no-undef
);

renderApp(App);

// #if process.env.NODE_ENV === "development"
module.hot.accept('./components/App.js', () => { renderApp(App); });
// #endif
