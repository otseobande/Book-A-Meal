import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const history = createBrowserHistory();

const middlewares = [
  thunk,
  routerMiddleware(history)
];

export default async () => {
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    const { logger } = await import('redux-logger');
    const { composeWithDevTools } = await import('redux-devtools-extension');
    composeEnhancers = composeWithDevTools;

    if (logger) {
      middlewares.push(logger);
    }
  }

  return createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
