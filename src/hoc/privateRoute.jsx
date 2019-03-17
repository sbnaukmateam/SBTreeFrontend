import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';
import { selectorLoggedIn, selectorRouterPathname, selectorAuthInitial } from '../selectors';
import { modalActions } from '../actions';
import { stringifyParams } from '../util';


function basicPrivateRoute(WrappedComponent) {
  class HocWrapper extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleAnonymous = this.handleAnonymous.bind(this);
    }

    componentDidMount() {
      const { hocLoggedIn, hocInitial } = this.props;
      if (!hocLoggedIn && !hocInitial) {
        this.handleAnonymous();
      }
    }

    componentDidUpdate() {
      const { hocLoggedIn, hocInitial } = this.props;
      if (!hocLoggedIn && !hocInitial) {
        this.handleAnonymous();
      }
    }

    handleAnonymous() {
      const { hocActions: { historyPush, modals }, hocPathname: back } = this.props;
      historyPush(`/${stringifyParams({ back })}`);
      modals.openLoginModal();
    }

    render() {
      const {
        hocActions, hocLoggedIn, hocInitial, ...rest
      } = this.props;
      if (!hocLoggedIn) {
        return null;
      }
      return <WrappedComponent {...rest} />;
    }
  }
  HocWrapper.propTypes = {
    hocActions: PropTypes.object.isRequired,
    hocLoggedIn: PropTypes.bool.isRequired,
    hocInitial: PropTypes.bool.isRequired,
    hocPathname: PropTypes.string.isRequired,
  };
  return HocWrapper;
}

const mapStateToProps = state => ({
  hocLoggedIn: selectorLoggedIn(state),
  hocInitial: selectorAuthInitial(state),
  hocPathname: selectorRouterPathname(state),
});

const mapDispatchToProps = dispatch => ({
  hocActions: {
    historyPush: bindActionCreators(push, dispatch),
    modals: bindActionCreators(modalActions, dispatch),
  },
});

export const privateRoute = compose(
  connect(mapStateToProps, mapDispatchToProps),
  basicPrivateRoute,
);
