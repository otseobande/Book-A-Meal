import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
// #if process.env.NODE_ENV === 'development'
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// #endif
import history from './history.js';
import rootReducer from './reducers/rootReducer.js';

let composeEnhancers = compose;

const middlewares = [
  thunk,
  routerMiddleware(history)
];

// #if process.env.NODE_ENV === 'development'
middlewares.push(logger);
composeEnhancers = composeWithDevTools;
// #endif

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
