import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { profileActions, membersActions } from '../actions';

import {
  selectorProfileById, selectorPasswordChange, selectorPatron, selectorInfoChange,
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
    const { me } = this.props;
    const {
      phones, emails, profiles,
      positions, degrees,
    } = me || {};
    const contacts = [
      ...(phones || []).map(phone => ({ item: phone, type: 'phone' })),
      ...(profiles || []).map(profile => ({ item: profile, type: detectProfileType(profile) })),
      ...(emails || []).map(email => ({ item: email, type: 'email' })),
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
        {me && (
          <section className="profile">
            <div>
              <div className="l-col">
                <ProfileCard {...me} />
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
  me: PropTypes.object,
  patron: PropTypes.object,
  actions: PropTypes.object.isRequired,
  passwordChanged: PropTypes.object.isRequired,
  infoChanged: PropTypes.object.isRequired,
};
Profile.defaultProps = {
  patron: null,
  me: null,
};
const mapStateToProps = (state, ownProps) => ({
  me: selectorProfileById(state, ownProps.id),
  patron: selectorPatron(state, ownProps.id),
  passwordChanged: selectorPasswordChange(state),
  infoChanged: selectorInfoChange(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    profile: bindActionCreators(profileActions, dispatch),
    members: bindActionCreators(membersActions, dispatch),
  },
});

const ProfileWrapped = connect(mapStateToProps, mapDispatchToProps)(Profile);

export { ProfileWrapped as Profile2 };
