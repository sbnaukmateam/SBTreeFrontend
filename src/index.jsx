import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';
import {
  MyContainer, NotFound, About, Projects, Profile2, Admin, App,
} from './containers';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

// TODO remove mock
const MyProfile = props => (<Profile2 id={1} {...props} />);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={MyContainer} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/profile" render={MyProfile} />
          <Route path="/profiles/:userId" render={MyProfile} />
          <Route path="/contacts" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
