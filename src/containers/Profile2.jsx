import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { profileActions, membersActions } from '../actions';

import {
  selectorCurrentProfile, selectorPatron, selectorMessage,
} from '../selectors';

import { ProfileCard, ProfileSidebar, ProfileInfoColumn } from '../components';
import { Layout } from './Layout';
import { formatProfileS2C, formatDegree, formatPosition } from '../util/format';

class Profile extends PureComponent {
  componentDidMount() {
    const { actions, match: { params } } = this.props;
    const { id } = params || {};
    actions.members.nedbGetMember(id);
  }

  render() {
    console.log(this.props);
    const { profile, patron, message } = this.props;
    const formattedProfile = formatProfileS2C(profile);
    const { contacts, positions, degrees } = formattedProfile;
    return (
      <Layout>
        <p>{message}</p>
        {profile && (
          <section className="profile">
            <div>
              <div className="l-col">
                <ProfileCard {...formattedProfile} patron={patron} />
                <div className="edit-info-wrapper">
                  <ProfileInfoColumn items={contacts} title="Контакти:" makeAnchors />
                  <ProfileInfoColumn items={positions} title="Посади в СБ:" formatter={formatPosition} />
                  <ProfileInfoColumn items={degrees} title="Навчання:" formatter={formatDegree} />
                </div>
              </div>
              <ProfileSidebar />
            </div>
          </section>
        )}
      </Layout>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object,
  patron: PropTypes.object,
  message: PropTypes.string,
  match: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};
Profile.defaultProps = {
  patron: null,
  profile: null,
  message: null,
};

const mapStateToProps = createSelector(
  [selectorCurrentProfile, selectorPatron, selectorMessage],
  (profile, patron, message) => ({ profile, patron, message }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    profile: bindActionCreators(profileActions, dispatch),
    members: bindActionCreators(membersActions, dispatch),
  },
});

const ProfileWrapped = connect(mapStateToProps, mapDispatchToProps)(Profile);

export { ProfileWrapped as Profile2 };
