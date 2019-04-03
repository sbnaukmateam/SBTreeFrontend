/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { modalActions } from '../actions';


// TODO move format to utils
const DATE_FORMAT = 'YYYY-MM-DD';

const formatDate = date => moment.utc(date).format(DATE_FORMAT);

class ProfileCard extends PureComponent {
  constructor() {
    super();
    this.state = ({
      editName: false,
    });
  }

  toggleNameEditor(elem) {
    this.setState(prevState => ({
      editName: !prevState.editName,
    }));
    const { editName } = this.state;
    if (editName) elem.focus();
  }

  render() {
    // TODO add projects
    // TODO add different icons to interests
    // TODO add props validation
    const {
      avatar, name, surname, nickName,
      birthday, patron, interests, actions: { modal },
    } = this.props;
    const { editName } = this.state;
    const birthdayFormatted = birthday && formatDate(birthday);
    const interestsShort = (interests || []).slice(0, 3);
    const { name: patronName, surname: patronSurname } = patron || {};
    return (
      <div className="profile-card">
        <div>
          <img src={avatar || '/images/profile-default-02.png'} className="profile-ava" />
          <button className="profile-ico-r" type="button" onClick={modal.openChangeAvaModal}><img src="/images/r-ico.png" /></button>
          <img src="/images/l-ico.png" className="profile-ico-l" />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <div>
            {editName
              ? <input type="text" id="nameEditor" value={`${name} ${surname}`} />
              : (
                <p className="card-name">
                  {name}
              &nbsp;
                  {surname}
                </p>
              )}

            <p className="card-nickname">
              {nickName}
            </p>
          </div>
          <div className="card-info-box">
            <div className="card-info">
              <p>Дата народження:</p>
              <p>{birthdayFormatted}</p>
            </div>
            <div className="card-info">
              <p>Патрон:</p>

              <p>
                {patronName}
                &nbsp;
                {patronSurname}
              </p>
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
const mapDispatchToProps = dispatch => ({
  actions: {
    modal: bindActionCreators(modalActions, dispatch),
  },
});
const ProfileCardWrapped = connect(null, mapDispatchToProps)(ProfileCard);
export { ProfileCardWrapped as ProfileCard };
