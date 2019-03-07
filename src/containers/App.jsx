import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ModalWrapper } from '../components';
import { authActions } from '../actions';

class App extends PureComponent {
  componentWillMount() {
    const { actions: { auth } } = this.props;
    auth.verifyUser();
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {children}
        <ModalWrapper />
      </React.Fragment>
    );
  }
}


App.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object.isRequired,
};

App.defaultProps = {
  children: null,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});

const AppWrapper = connect(null, mapDispatchToProps)(App);

export { AppWrapper as App };
