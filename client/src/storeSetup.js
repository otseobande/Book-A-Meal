import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// #if process.env.NODE_ENV === 'development'
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// #endif
import rootReducer from './reducers/rootReducer.js';

export const history = createBrowserHistory();

let composeEnhancers = compose;

const middlewares = [
  thunk,
  routerMiddleware(history)
];

// #if process.env.NODE_ENV === 'development'
middlewares.push(logger);
composeEnhancers = composeWithDevTools;
// #endif

export const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(...middlewares))
);

