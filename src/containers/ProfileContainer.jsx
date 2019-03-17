import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Profile2 } from './Profile2';
import {
  selectorAuthUser,
} from '../selectors';
import { privateRoute } from '../hoc';

class ProfileContainer extends PureComponent {
  render() {
    const { user, match } = this.props; // eslint-disable-line
    const { params } = match;
    const { id: paramsId } = params || {};
    const { id: userId } = { id: '1' }; // user || {};
    const id = paramsId || userId;
    if (!id) {
      return null;
    }
    return <Profile2 id={id} />;
  }
}

ProfileContainer.propTypes = {
  user: PropTypes.object,
  match: PropTypes.object.isRequired,
};
ProfileContainer.defaultProps = {
  user: null,
};

const mapStateToProps = createSelector(
  [selectorAuthUser],
  user => ({ user }),
);

const ProfileContainerWrapped = privateRoute(connect(mapStateToProps)(ProfileContainer));

export { ProfileContainerWrapped as ProfileContainer };
