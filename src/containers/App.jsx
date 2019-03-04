import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ModalLogin, ModalSignup,
} from '../components';
import { authActions } from '../actions';
import { selectorModalResult } from '../selectors';

class App extends PureComponent {
  componentWillMount() {
    const { actions: { auth } } = this.props;
    auth.verifyUser();
  }

  render() {
    const { children, openModal } = this.props;
    return (
      <React.Fragment>
        {children}
        {openModal === 'login' && <ModalLogin />}
        {openModal === 'signUp' && <ModalSignup />}
      </React.Fragment>
    );
  }
}


App.propTypes = {
  children: PropTypes.any,
  openModal: PropTypes.string,
  actions: PropTypes.object.isRequired,
};

App.defaultProps = {
  children: null,
  openModal: null,
};

const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
  },
});
const mapStateToProps = state => ({
  openModal: selectorModalResult(state),
});
const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppWrapper as App };
