import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './components/App.js';
import storeCreator from './storeCreator';

(async () => {
  const store = await storeCreator();

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root') // eslint-disable-line no-undef
  );
})();

