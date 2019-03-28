import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';
import {
  MyContainer, NotFound, About, /* Projects, */ ProfileContainer, Admin, App,
} from './containers';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={MyContainer} />
          <Route path="/about" component={About} />
          {/* TODO: Uncomment after projects will be finished */}
          {/* <Route path="/projects" component={Projects} /> */}
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/profiles/:id" component={ProfileContainer} />
          <Route path="/contacts" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
