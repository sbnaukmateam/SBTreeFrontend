import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import { MyComponent } from '../components';
import { pingActions } from '../actions';
import {
  selectorResult, selectorLoading, selectorInitial, selectorError,
} from '../selectors';
import { formatData } from '../util/format';

class MyContainer extends PureComponent {
  render() {
    const {
      result, loading, initial, error, actions,
    } = this.props;
    const message = formatData({
      result, loading, initial, error,
    }, {
      loading: 'Loading...', initial: 'Not pinged yet',
    });
    return (
      <div>
        <button onClick={actions.ping.pingRequest} type="button">
                    PING SERVER
        </button>
        <button onClick={actions.ping.pingReset} type="button">
                    RESET
        </button>
        <MyComponent>
          {message}
        </MyComponent>
      </div>
    );
  }
}

MyContainer.propTypes = {
  result: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  initial: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  error: PropTypes.string,
};

MyContainer.defaultProps = {
  result: null,
  error: null,
};

const mapStateToProps = createSelector(
  [selectorResult, selectorLoading, selectorInitial, selectorError],
  (result, loading, initial, error) => ({
    result, loading, initial, error,
  }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    ping: bindActionCreators(pingActions, dispatch),
  },
});

const MyContainerWrapped = connect(mapStateToProps, mapDispatchToProps)(MyContainer);

export { MyContainerWrapped as MyContainer };
