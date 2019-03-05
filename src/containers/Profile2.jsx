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

// TODO detect profile type or change it to server detection
const detectProfileType = () => 'profile';

class Profile extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.members.fetchMembers();
  }

  render() {
    const { profile, patron, message } = this.props;
    const {
      phones, emails, profiles,
      positions, degrees,
    } = profile || {};
    const contacts = [
      ...(phones || []).map(item => ({ item, type: 'phone' })),
      ...(profiles || []).map(item => ({ item, type: detectProfileType(item) })),
      ...(emails || []).map(item => ({ item, type: 'email' })),
    ];
    const formattedPositions = (positions || []).map(({ years, name }) => ({
      item: `${name} - ${years.join(', ')}`,
    }));
    const formattedDegrees = (degrees || []).map(({
      faculty, year, speciality, program,
    }) => ({
      item: `${faculty} - ${year} (${speciality}, ${program})`,
    }));
    return (
      <Layout>
        <p>{message}</p>
        {profile && (
          <section className="profile">
            <div>
              <div className="l-col">
                <ProfileCard {...profile} patron={patron} />
                <div className="edit-info-wrapper">
                  <ProfileInfoColumn items={contacts} title="Контакти:" makeAnchors />
                  <ProfileInfoColumn items={formattedPositions} title="Посади в СБ:" />
                  <ProfileInfoColumn items={formattedDegrees} title="Навчання:" />
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
