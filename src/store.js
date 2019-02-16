import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import rootReducer from './reducers/index';

export const history = createBrowserHistory()
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    const { createLogger } = require('redux-logger');
    middlewares.push(createLogger({ collapsed: true }));
}

const composeEnhancers =
  ['production', 'staging'].includes(process.env.NODE_ENV) &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const configStore = (initialState = {}) => {
  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history), ...middlewares,
    )));
};

export default configStore;
