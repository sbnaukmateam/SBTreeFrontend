import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ModalSignUp, ModalLogin, ModalForgotPass, ModalChangePass,
} from '../components';
import { authActions, modalActions, resetActions } from '../actions';
import { selectorRouterSearch } from '../selectors';
import { parseParams } from '../util';

class App extends PureComponent {
  componentWillMount() {
    const { actions: { auth } } = this.props;
    auth.verifyUser();
  }

  componentDidMount() {
    const { actions: { modal, reset }, search } = this.props;
    const { resetToken } = parseParams(search);
    if (resetToken) {
      modal.openChangePassModal();
      reset.setReset(resetToken);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        {children}
        <ModalLogin />
        <ModalSignUp />
        <ModalForgotPass />
        <ModalChangePass />
      </React.Fragment>
    );
  }
}


App.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object.isRequired,
  search: PropTypes.string.isRequired,
};

App.defaultProps = {
  children: null,
};
const mapStateToProps = state => ({
  search: selectorRouterSearch(state),
});
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(authActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
    reset: bindActionCreators(resetActions, dispatch),
  },
});

const AppWrapper = connect(mapStateToProps, mapDispatchToProps)(App);

export { AppWrapper as App };
