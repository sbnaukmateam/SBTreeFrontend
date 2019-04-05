import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PropTypes from 'prop-types';
import { membersActions } from '../actions';
import {
  selectorMembersProfile,
} from '../selectors';
import { PasswordChangeForm } from './PasswordChangeForm';
import { Button } from './Button';

class ProfileSidebar extends PureComponent {
  constructor(props) {
    super(props);
    this.setMeAsPatron = this.setMeAsPatron.bind(this);
    this.setOldMember = this.setOldMember.bind(this);
    this.setCurrentMember = this.setCurrentMember.bind(this);
    this.setNewMember = this.setNewMember.bind(this);
    this.setAdmin = this.setAdmin.bind(this);
    this.unsetAdmin = this.unsetAdmin.bind(this);
    this.setActive = this.setActive.bind(this);
    this.unsetActive = this.unsetActive.bind(this);
    this.setOldMember = this.setOldMember.bind(this);
    this.setOldMember = this.setOldMember.bind(this);
  }

  setMeAsPatron() {
    // const {
    //   profile, actions: { members },
    // } = this.props;
    // const { id, positions: prevPositions } = profile;
    // const positions = prevPositions.filter((position, index) => indexToRemove !== index);
    // members.updateMember(id, { patronId: });
  }

  setOldMember() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { status: 'OLD_MEMBER' });
  }

  setCurrentMember() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { status: 'CURRENT_MEMBER' });
  }

  setNewMember() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { status: 'NEW_MEMBER' });
  }

  setAdmin() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { admin: true });
  }

  setActive() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { active: true });
  }

  unsetAdmin() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { admin: false });
  }

  unsetActive() {
    const {
      profile, actions: { members },
    } = this.props;
    const { id } = profile;
    members.updateMember(id, { active: false });
  }

  render() {
    const { profile: { status, admin, active } } = this.props;
    return (
      <div className="r-col">
        <PasswordChangeForm />
        <div className="status-change-box">
          <h3>ДІЇ:</h3>
          {/* <Button onClick={this.setMeAsPatron}>ОПАТРОНИТИ</Button> */}
          {status === 'CURRENT_MEMBER' && <Button onClick={this.setOldMember}>ПОШАНУВАТИ</Button>}
          {status === 'OLD_MEMBER' && <Button onClick={this.setCurrentMember}>ВІДНОВИТИ</Button>}
          {status === 'NEW_MEMBER' && <Button onClick={this.setCurrentMember}>ВИСВЯТИТИ</Button>}
          {status === 'CURRENT_MEMBER' && <Button onClick={this.setNewMember}>РОЗВИСВЯТИТИ</Button>}
          {!status && <Button onClick={this.setNewMember}>ІНІЦІАЛІЗУВАТИ</Button>}
          {!admin && <Button onClick={this.setAdmin}>ЗРОБИТИ АДМІНОМ</Button>}
          {admin && <Button onClick={this.unsetAdmin}>ВИДАЛИТИ З АДМІНІВ</Button>}
          {!active && <Button onClick={this.setActive}>АКТИВУВАТИ</Button>}
          {active && <Button onClick={this.unsetActive}>ДЕАКТИВУВАТИ</Button>}
          {/* <Button onClick={}>ВИДАЛИТИ</Button> */}
        </div>
      </div>
    );
  }
}
ProfileSidebar.propTypes = ({
  actions: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
});
const mapStateToProps = createSelector(
  [selectorMembersProfile],
  profile => ({ profile }),
);

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
  },
});

const ProfileSidebarWrapped = connect(mapStateToProps, mapDispatchToProps)(ProfileSidebar);

export { ProfileSidebarWrapped as ProfileSidebar };
