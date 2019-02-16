import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';



import config from 'config';



export class App extends React.Component {

  render() {
    return (
      <div>
            <Helmet
              defaultTitle={config.title}
              titleTemplate={`%s | ${config.name}`}
            />
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(App);
