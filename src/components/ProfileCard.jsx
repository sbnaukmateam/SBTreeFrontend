/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { membersActions } from '../actions';
import { selectorMembersProfile } from '../selectors';


// TODO move format to utils
const DATE_FORMAT = 'YYYY-MM-DD';

const formatDate = date => moment.utc(date).format(DATE_FORMAT);

class ProfileCard extends PureComponent {
  constructor(props) {
    super(props);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.newAvatar = null;
  }

  updateAvatar(avatar, event) {
    const r = new FileReader();
    r.onloadend = () => {
      this.newAvatar = r.result;
    };
    r.readAsDataURL(avatar);
    event.preventDefault();
    const {
      actions: { members }, profile: { id },
    } = this.props;
    members.updateMember(id, {
      avatar: this.newAvatar,
    });
  }

  render() {
    // TODO add projects
    // TODO add different icons to interests
    // TODO add props validation

    const {
      avatar, name, surname, nickName,
      birthday, patron, interests,
    } = this.props;
    const birthdayFormatted = birthday && formatDate(birthday);
    const interestsShort = (interests || []).slice(0, 3);
    const { name: patronName, surname: patronSurname } = patron || {};
    return (
      <div className="profile-card">
        <div>
          <img src={avatar || '/images/profile-default-02.png'} className="profile-ava" />
          <div className="profile-ico-r">
            <label htmlFor="update-photo">
              <img src="/images/r-ico.png" alt="update" />
              <input type="file" name="file" id="update-photo" className="update-photo" onChange={e => this.updateAvatar(e.target.files[0], e)} />
            </label>
          </div>
          <img src="/images/l-ico.png" className="profile-ico-l" />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div>
            <div className="name-box">
              <p className="card-name">
                {name}
              &nbsp;
                {surname}
              </p>
              <button type="button" className="pen-icon-btn">
                <img src="/images/pen.png" className="pen-icon-big" />
              </button>
            </div>
            <div className="name-box">
              <p className="card-nickname">
                {nickName}
              </p>
              <button type="button" className="pen-icon-btn">
                <img src="/images/pen.png" className="pen-icon-medium" />
              </button>
            </div>
          </div>
          <div className="card-info-box">
            <div className="card-info">
              <p>Дата народження:</p>
              <div className="name-box">
                <p>{birthdayFormatted}</p>
                <button type="button" className="pen-icon-btn">
                  <img src="/images/pen.png" className="pen-icon-medium" />
                </button>
              </div>
            </div>
            <div className="card-info">
              <p>Патрон:</p>
              <div className="name-box">
                <p>
                  {patronName}
                  &nbsp;
                  {patronSurname}
                </p>
                <button type="button" className="pen-icon-btn">
                  <img src="/images/pen.png" className="pen-icon-medium" />
                </button>
              </div>
            </div>
            <div className="card-info">
              <p>Проекти:</p>
              <div>
                <img src="/images/point.png" alt="" />
                <img src="/images/point.png" alt="" />
                <img src="/images/point.png" alt="" />
                <img src="/images/add-point.png" alt="" />
              </div>
            </div>
            <div className="card-info">
              <p>Інтереси:</p>
              <div>
                {interestsShort.map(item => <img key={item} src="/images/point.png" alt="" />)}
                <img src="/images/add-point.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: selectorMembersProfile(state),
});

const mapDispatchToProps = dispatch => ({
  actions: {
    members: bindActionCreators(membersActions, dispatch),
  },
});
const ProfileCardWrapped = connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
export { ProfileCardWrapped as ProfileCard };
