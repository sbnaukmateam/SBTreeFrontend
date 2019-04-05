import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { profileActions, membersActions, modalActions } from '../actions';

import {
  selectorMembersProfile, selectorMembersPatron, selectorMessage,
} from '../selectors';

import { ProfileCard, ProfileSidebar, ProfileInfoColumn } from '../components';
import { Layout } from './Layout';
import {
  formatProfileS2C, formatPosition,
} from '../util/format';

class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.handleRemoveContact = this.handleRemoveContact.bind(this);
    this.handleRemovePosition = this.handleRemovePosition.bind(this);
    this.handleRemoveDegree = this.handleRemoveDegree.bind(this);
  }

  componentDidMount() {
    this.fetchProfile();
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    const { id: prevId } = prevProps;
    if (id !== prevId) {
      this.fetchProfile();
    }
  }

  fetchProfile() {
    const { id, actions: { members } } = this.props;
    if (id) {
      members.nedbGetMember(id);
    }
  }

  handleRemoveContact(indexToRemove) {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    const { contacts: prevContacts } = formatProfileS2C(profile);
    const contacts = prevContacts.filter((contact, index) => indexToRemove !== index);
    const phones = (contacts || []).filter(({ type }) => type === 'phone').map(({ item }) => item);
    const emails = (contacts || []).filter(({ type }) => type === 'email').map(({ item }) => item);
    const profiles = (contacts || []).filter(({ type }) => type === 'profile').map(({ item }) => item);
    members.updateMember(id, { phones, emails, profiles });
  }

  handleRemovePosition(indexToRemove) {
    const {
      profile, actions: { members },
    } = this.props;
    const { id, positions: prevPositions } = profile;
    const positions = prevPositions.filter((position, index) => indexToRemove !== index);
    members.updateMember(id, { positions });
  }

  handleRemoveDegree(indexToRemove) {
    const {
      profile, actions: { members },
    } = this.props;
    const { id, degrees: prevDegrees } = profile;
    const degrees = prevDegrees.filter((degree, index) => indexToRemove !== index);
    members.updateMember(id, { degrees });
  }

  render() {
    const {
      profile, patron, message, actions: { modal },
    } = this.props;
    const formattedProfile = formatProfileS2C(profile);
    const { contacts, positions, degrees } = formattedProfile;
    return (
      <Layout>
        {profile && (
          <section className="profile">
            { message && <p>{message}</p>}
            <div>
              <div className="l-col">
                <ProfileCard {...formattedProfile} patron={patron} />
                <div className="edit-info-wrapper">
                  <ProfileInfoColumn onRemove={this.handleRemoveContact} onAdd={modal.openAddContactModal} items={contacts} type="contacts" title="Контакти:" />
                  <ProfileInfoColumn onRemove={this.handleRemovePosition} onAdd={modal.openAddPositionModal} items={positions} type="positions" title="Посади в СБ:" formatter={formatPosition} />
                  <ProfileInfoColumn onRemove={this.handleRemoveDegree} onAdd={modal.openAddDegreeModal} items={degrees} type="degrees" title="Навчання:" />
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
  id: PropTypes.string,
  profile: PropTypes.object,
  patron: PropTypes.object,
  message: PropTypes.string,
  actions: PropTypes.object.isRequired,
};
Profile.defaultProps = {
  patron: null,
  profile: null,
  message: null,
  id: null,
};

const mapStateToProps = createSelector(
  [selectorMembersProfile, selectorMembersPatron, selectorMessage],
  (profile, patron, message) => ({
    profile, patron, message,
  }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    profile: bindActionCreators(profileActions, dispatch),
    members: bindActionCreators(membersActions, dispatch),
    modal: bindActionCreators(modalActions, dispatch),
  },
});

const ProfileWrapped = connect(mapStateToProps, mapDispatchToProps)(Profile);

export { ProfileWrapped as Profile2 };
