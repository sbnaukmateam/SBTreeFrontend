import {
  applyMiddleware, compose, createStore, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';

import * as appReducers from './reducers';

const history = createBrowserHistory();

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({ collapsed: true }));
}

const reducers = combineReducers({
  router: connectRouter(history), ...appReducers,
});

const enhancers = compose(applyMiddleware(
  routerMiddleware(history), ...middlewares,
));

const configureStore = (initialState = {}) => createStore(reducers, initialState, enhancers);

const store = configureStore();

export { store, history };
