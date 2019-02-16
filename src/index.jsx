import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'
import {AppContainer} from 'react-hot-loader';
import {syncHistoryWithStore} from 'react-router-redux'
import configStore, {history} from 'index';
import App from 'containers/App';

const store = configStore();

app.run();

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact component={<Component/>}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById("root"),
);
