import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store';
import {
  MyContainer, NotFound, Layout, About, Projects, Profile, Admin,
} from './containers';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

// TODO remove mock
const MyProfile = props => (<Profile id={1} {...props} />);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* TODO remove mock */}
      <Layout id={1}>
        <Switch>
          <Route path="/" exact component={MyContainer} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/profile" render={MyProfile} />
          <Route path="/contacts" component={Admin} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
